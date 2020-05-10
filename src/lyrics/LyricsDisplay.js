import React from 'react';
import { Card, TextField } from '@material-ui/core';

function LyricsDisplay() {
  return (
    <Card>
        <h1>Lyrics</h1>
        <TextField
          id="lyrics"
          label="Song Lyric"
          multiline
          rows={10}
          variant="outlined"
        />
    </Card>
  );
}

export default LyricsDisplay;