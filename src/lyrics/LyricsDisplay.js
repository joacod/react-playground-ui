import React from "react";
import { Card, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  space: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  margin: {
    margin: theme.spacing(1),
    width: "90%",
  },
}));

const LyricsDisplay = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={8}>
      <Card className={classes.space} >
        <h1>Lyrics</h1>
        <FormControl  className={classes.margin}>
          <TextField
            id="lyrics"
            label="Song Lyric"
            multiline
            rows={20}
            variant="outlined"
            value={props.lyricsData.Lyrics}
          />
        </FormControl>
      </Card>
    </Grid>
  );
};

export default LyricsDisplay;
