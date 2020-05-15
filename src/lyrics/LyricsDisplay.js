import React from "react";
import { Card, TextField } from "@material-ui/core";

const LyricsDisplay = (props) => {
  return (
    <Card>
      <h1>Lyrics</h1>
      <TextField
        id="lyrics"
        label="Song Lyric"
        multiline
        rows={10}
        variant="outlined"
        value={props.lyricsData.Lyrics}
      />
    </Card>
  );
};

export default LyricsDisplay;
