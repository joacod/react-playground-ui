import React from 'react';
import { Card, TextField } from '@material-ui/core';

function LyricsDisplay() {
  return (
    <Card>
        <h1>Lyrics Display</h1>
        <TextField
          id="lyrics"
          label="Multiline"
          multiline
          rows={10}
          defaultValue="Search for a Lyric."
          variant="outlined"
        />
    </Card>
  );
}

export default LyricsDisplay;