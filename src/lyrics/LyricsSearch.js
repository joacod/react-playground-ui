import React from "react";
import { Button, Card, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FaceIcon from "@material-ui/icons/Face";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const LyricsSearch = (props) => {
  const classes = useStyles();
  const [artist, setArtist] = React.useState("");
  const [song, setSong] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(artist, song);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1>Find Lyrics</h1>
        <TextField
          id="artist"
          label="Artist"
          variant="outlined"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FaceIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="song"
          label="Song"
          variant="outlined"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MusicNoteIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          <SearchIcon /> Search
        </Button>
      </form>
    </Card>
  );
};

export default LyricsSearch;
