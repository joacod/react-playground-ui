import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function About() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h1>About</h1>
      <p>React Playground using create-react-app, Material-UI and React Router</p>
    </Container>
  );
}

export default About;