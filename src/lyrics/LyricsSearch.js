import React from 'react';
import { Button, Card, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
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
        <h1>Lyrics Search</h1>
        <form className={classes.root}>
          <TextField id="artist" label="Artist" variant="outlined" />
          <TextField id="song" label="Song" variant="outlined" />
          <Button variant="contained" color="primary">Search</Button>
        </form>
    </Card>
  );
}

export default LyricsSearch;