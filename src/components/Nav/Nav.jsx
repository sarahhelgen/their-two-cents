import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import TerrainIcon from '@mui/icons-material/Terrain';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';



function Nav(props) {

  const user = useSelector((store) => store.user);
  const [drawerState, setDrawerState] = useState(false);
  const dispatch = useDispatch();

  const toggleDrawer = (open) => (event) => {
    setDrawerState(open)
  }

  const drawerWidth = 240;

  const useStyles = makeStyles({
    page: {
      background: '#f4f1de',
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
    },
    link: {
      textDecoration: 'none',
      color: 'black',
    }
  })

  const classes = useStyles();

  const list = () => (
    <div onClick={toggleDrawer(false)}>
      <Typography variant="h6">

        <List>
          <Link to="/user" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>
          <Link to="/add" className={classes.link} >
            <ListItem button>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary={"Add Recommendation"} />
            </ListItem>
          </Link>
          <Link to="/media" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <TheatersIcon />
              </ListItemIcon>
              <ListItemText primary={"Media"} />
            </ListItem>
          </Link>
          <Link to="/business"className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary={"Business"} />
            </ListItem>
          </Link>
          <Link to="/product" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText primary={"Product"} />
            </ListItem>
          </Link>
          <Link to="/other" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <TerrainIcon />
              </ListItemIcon>
              <ListItemText primary={"Other"} />
            </ListItem>
          </Link>
          <Link to="/favorite" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary={"Favorites"} />
            </ListItem>
          </Link>
          <Link className={classes.link}>
          <ListItem button className={props.className} onClick={() => dispatch({ type: 'LOGOUT' })}>
          <ListItemIcon>
          <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
          </ListItem>

          </Link>
          
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
          <Box p={1}>
          <MenuIcon className="nav-title" fontSize="large" button onClick={toggleDrawer(true)} />
          </Box>
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
