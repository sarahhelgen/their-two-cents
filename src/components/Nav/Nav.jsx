import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';



function Nav() {

  const user = useSelector((store) => store.user);
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open)
  }

  const drawerWidth = 240;

  const useStyles = makeStyles({
    page: {
      background: '#f9f9f9',
      width: '100%'
    },
    drawer: {
      width: drawerWidth,

    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    }

  })

  const classes = useStyles();

  const list = () => (
    <div onClick={toggleDrawer(false)}>
      <Typography variant="h5">
        <List>
          <ListItem>Add a Recommendation</ListItem>
          <ListItem>Media</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Businesses</ListItem>
          <ListItem>Other</ListItem>
          <ListItem>Favorites!</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Logout</ListItem>
        </List>
      </Typography>
    </div>
  )

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Their Two Cents</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/add">
              Add a Recommendation
            </Link>

            <Link className="navLink" to="/favorite">
              Favorites Page
            </Link>

            <Link className="navLink" to="/media">
              Media
            </Link>

            <Link className="navLink" to="/business">
              Business
            </Link>

            <Link className="navLink" to="/product">
              Product
            </Link>

            <Link className="navLink" to="/other">
              Other
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}
        <div className={classes.root}>
          <Button onClick={toggleDrawer(true)}>Open From Left</Button>
          <Drawer
            className={classes.drawer}
            variant="temporary"
            anchor={'left'}
            classes={{ paper: classes.drawerPaper }}
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </div>

      </div>
    </div>
  );
}

export default Nav;
