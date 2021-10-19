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
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from '@mui/material/ListItemText';
import TheatersIcon from '@mui/icons-material/Theaters';
import BusinessIcon from '@mui/icons-material/Business';
import NordicWalkingIcon from '@mui/icons-material/NordicWalking';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TerrainIcon from '@mui/icons-material/Terrain';
import WidgetsIcon from '@mui/icons-material/Widgets';



function Nav() {

  const user = useSelector((store) => store.user);
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setDrawerState(open)
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
      <Typography variant="h6">

        <List>

          <Link to="/user">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>

          <Link to="/add">
            <ListItem button>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary={"Add Recommendation"} />
            </ListItem>
          </Link>

          <Link to="/media">
            <ListItem button>
              <ListItemIcon>
                <TheatersIcon />
              </ListItemIcon>
              <ListItemText primary={"Media"} />
            </ListItem>
          </Link>

          <Link to="/business">
            <ListItem button>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary={"Business"} />
            </ListItem>
          </Link>

          <Link to="/product">
            <ListItem button>
              <ListItemIcon>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText primary={"Product"} />
            </ListItem>
          </Link>

          <Link to="/other">
            <ListItem button>
              <ListItemIcon>
                <TerrainIcon />
              </ListItemIcon>
              <ListItemText primary={"Other"} />
            </ListItem>
          </Link>

          <Link to="/favorite">
            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary={"Favorites"} />
            </ListItem>
          </Link>
          <LogOutButton className="navLink" />

        </List>
      </Typography>
    </div>
  )

  return (
    <div className="nav">
        <h2 className="nav-title">Their Two Cents</h2>
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

          </>
        )}
        <div className={classes.root}>
          <MenuIcon className="nav-title" fontSize="large" button onClick={toggleDrawer(true)} />
          <Drawer
            className={classes.drawer}
            variant="temporary"
            anchor={'right'}
            classes={{ paper: classes.drawerPaper }}
            open={drawerState}
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
