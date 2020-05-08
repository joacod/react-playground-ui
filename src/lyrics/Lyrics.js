import React from 'react';
import LyricsSearch from './LyricsSearch';
import LyricsDisplay from './LyricsDisplay';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Lyrics() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <LyricsSearch />
      <LyricsDisplay />
    </Container>
  );
}

export default Lyrics;