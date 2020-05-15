import React from "react";
import { Button, Card, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FaceIcon from "@material-ui/icons/Face";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  space: {
    "& > *": {
      margin: theme.spacing(1),      
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
    <Grid item xs={4}>
      <Card>
        <form className={classes.space} onSubmit={handleSubmit}>
          <h1>Find Lyrics</h1>
          <div className={classes.space}>
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
          </div>
          <div className={classes.space}>
            <Button variant="contained" color="primary" type="submit">
              <SearchIcon /> Search
            </Button>
          </div>
        </form>
      </Card>
    </Grid>
  );
};

export default LyricsSearch;
