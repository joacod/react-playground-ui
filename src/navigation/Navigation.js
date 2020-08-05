import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import InfoIcon from '@material-ui/icons/Info';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import clsx from 'clsx';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import ListItemLink from './ListItemLink';
import Lyrics from '../lyrics/Lyrics';
import About from '../about/About';
import Counter from '../counter/Counter';
import CounterClass from '../counter/CounterClass';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }));

function Navigation() {
    const classes = useStyles();
    const directionOfSidebar = 'left';
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (directionOfSidebar, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [directionOfSidebar]: open });
    };

    const list = (directionOfSidebar) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: directionOfSidebar === 'top' || directionOfSidebar === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(directionOfSidebar, false)}
        onKeyDown={toggleDrawer(directionOfSidebar, false)}
      >
        <List>
          <ListItemLink to="/lyrics" primary="Lyrics" icon={<MusicNoteIcon />} />
          <ListItemLink to="/counter-class" primary="Counter Class" icon={<SentimentDissatisfiedIcon />} />
          <ListItemLink to="/counter" primary="Counter Functional" icon={<SentimentSatisfiedAltIcon />} />          
          <ListItemLink to="/about" primary="About" icon={<InfoIcon />} />          
        </List>
        <Divider />
      </div>
    );

    return (
      <Router>
        <AppBar position="static">
            <Toolbar>
              <React.Fragment key={directionOfSidebar}>
                <IconButton onClick={toggleDrawer({directionOfSidebar}, true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Drawer anchor={directionOfSidebar} open={state[{directionOfSidebar}]} onClose={toggleDrawer({directionOfSidebar}, false)}>
                  {list({directionOfSidebar})}
                </Drawer>
              </React.Fragment>
                
              <Typography variant="h6" className={classes.title}>
                  React Playground
              </Typography>
            </Toolbar>    
        </AppBar>
        
        <Route path="/lyrics" component={Lyrics} />
        <Route path="/about" component={About} /> 
        <Route path="/counter" component={Counter} /> 
        <Route path="/counter-class" component={CounterClass} /> 
        <Redirect exact from="/" to="lyrics" />
      </Router>      
    );
}

export default Navigation;
