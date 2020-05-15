import React from "react";
import LyricsSearch from "./LyricsSearch";
import LyricsDisplay from "./LyricsDisplay";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const dataExample = {
  Artist: "beatles",
  SongTitle: "come together",
  Lyrics: "",
};

const Lyrics = () => {
  const classes = useStyles();
  const [data, setData] = React.useState(dataExample);

  const getLyrics = async function (artist, song) {
    // .Net Core Web API
    //const lyricsUrl = 'https://localhost:44309/api/v1/lyrics/';

    // Go Web API
    const lyricsUrl = "http://localhost:8080/api/v1/lyrics/";

    const response = await axios.get(lyricsUrl + artist + "/" + song);
    setData(response.data);

    return response.data;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <LyricsSearch lyricsData={data} onSubmit={getLyrics} />
        <LyricsDisplay lyricsData={data} />
      </Grid>
    </div>
  );
};

export default Lyrics;
