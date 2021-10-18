import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const mediaCount = useSelector(store => store.recommendations.media);
  const productCount = useSelector(store => store.recommendations.product);
  const businessCount = useSelector(store => store.recommendations.business);
  const otherCount = useSelector(store => store.recommendations.other);

  useEffect(() => {
    dispatch({ type: 'FETCH_MEDIA_COUNT' });
    dispatch({ type: 'FETCH_PRODUCT_COUNT' });
    dispatch({ type: 'FETCH_BUSINESS_COUNT' });
    dispatch({ type: 'FETCH_OTHER_COUNT' });
  }, []);



  const goToMedia = () => {
    history.push('/media');
  }

  const goToBusiness = () => {
    history.push('/business');
  }

  const goToProducts = () => {
    history.push('/product');
  }

  const goToOther = () => {
    history.push('/other');
  }

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open)
  }

  const list = () => (
    <div onClick={toggleDrawer(false)}>
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
    </div>
  )

  return (
    <div>

      {JSON.stringify(mediaCount)}
      {JSON.stringify(productCount)}
      {JSON.stringify(businessCount)}
      {JSON.stringify(otherCount)}

      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Media</TableCell>
            {/* <TableCell>{mediaCount[0].count}</TableCell> */}
            <TableCell><Button variant="text" onClick={goToMedia}>Details</Button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Products</TableCell>
            {/* <TableCell>{productCount[0].count}</TableCell> */}
            <TableCell><Button variant="text" onClick={goToProducts}>Details</Button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Businesses</TableCell>
            {/* <TableCell>{businessCount[0].count}</TableCell> */}
            <TableCell><Button variant="text" onClick={goToBusiness}>Details</Button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Other</TableCell>
            {/* <TableCell>{otherCount[0].count}</TableCell> */}
            <TableCell><Button variant ="text" onClick ={goToOther}>Details</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>

      <Button onClick={toggleDrawer(true)}>Open From Left</Button>
          <Drawer
          anchor={'left'}
          open={state}
          onClose={toggleDrawer(false)}
          >
              {list()}
            </Drawer>

      </div>


       





  );
}

// this allows us to use <App /> in index.js
export default UserPage;
