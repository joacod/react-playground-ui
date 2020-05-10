import React from 'react';
import { Button, Card, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FaceIcon from '@material-ui/icons/Face';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({  
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function LyricsSearch() {
  const classes = useStyles();

  return (
    <Card>        
        <form className={classes.form}>
          <h1>Find Lyrics</h1>
          <TextField id="artist" label="Artist" variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FaceIcon/>
                </InputAdornment>
              ),
            }}
          />
          <TextField id="song" label="Song" variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MusicNoteIcon/>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" color="primary"><SearchIcon /> Search</Button>
        </form>
    </Card>
  );
}

export default LyricsSearch;