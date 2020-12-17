import React from "react";
import LyricsSearch from "./LyricsSearch";
import LyricsDisplay from "./LyricsDisplay";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const dataExample = {
  Artist: "",
  SongTitle: "",
  Lyrics: "",
};

const Lyrics = () => {
  const classes = useStyles();
  const [data, setData] = React.useState(dataExample);
  const [error, setError] = React.useState("");

  const getLyrics = async function (artist, song) {
    // .Net Core Web API
    const lyricsUrl = "https://localhost:44309/api/v1/lyrics/";

    // Go Web API
    //const lyricsUrl = "http://localhost:8080/api/v1/lyrics/";

    await axios
      .get(lyricsUrl + artist + "/" + song)
      .then((response) => {
        setError("");
        setData(response.data);
        return response.data;
      })
      .catch((err) => {
        setData(dataExample);
        if (err.response) {
          setError(err.response.data);
        } else {
          setError("Something went wrong, try again in a few moments");
        }
      });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <LyricsSearch lyricsData={data} onSubmit={getLyrics} />
        <LyricsDisplay lyricsData={data} error={error} />
      </Grid>
    </div>
  );
};

export default Lyrics;
