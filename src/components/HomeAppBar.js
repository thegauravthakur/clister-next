import React, {useContext} from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  btn: {
    '&:hover': {
      borderColor: 'teal'
    }
  }
}));
const HomeAppBar = () => {
  const classes = useStyles();
  return (
    <AppBar color={'default'} position="static">
      <Toolbar>
        <Typography
          onClick={() => {
          }}
          variant="h6"
          className={classes.title}
        >
          C-LISTER
        </Typography>
        <Button style={{marginRight:10}} onClick={() => {
          window.location.href = 'https://app.clister.in/login';
        }} color="inherit">
          Login
        </Button>
        <Button

          className={classes.btn}
          variant={'outlined'}
          onClick={() => {
            window.location.href = 'https://app.clister.in/signup';
          }}
          color="inherit"
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HomeAppBar;
