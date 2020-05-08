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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import clsx from 'clsx';

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
          <ListItem button key='lyrics'>
            <ListItemIcon><MusicNoteIcon /></ListItemIcon>
            <ListItemText primary='Lyrics' />
          </ListItem>
        </List>
        <Divider />
      </div>
    );

    return (
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
    );
}

export default Navigation;
