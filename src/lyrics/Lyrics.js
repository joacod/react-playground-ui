import React from 'react';
import LyricsSearch from './LyricsSearch';
import LyricsDisplay from './LyricsDisplay';
import { Container } from '@material-ui/core';

function Lyrics() {
  return (
    <Container>
      <LyricsSearch />
      <LyricsDisplay />
    </Container>
  );
}

export default Lyrics;