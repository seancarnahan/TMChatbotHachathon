import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className="Header-wrapper">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <Grid container justify="center" alignItems="center">
              <Avatar alt="Remy Sharp" src="avatar.jpg" className={classes.bigAvatar} />
            </Grid>
          </IconButton>
          <Typography variant="h6" className="header-person">
            Andrea
          </Typography>
          <p className="header-person-role">
            Customer Support Specialist
          </p>
          <div className="header-faq-border">
            <p>
              FAQ
            </p>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
