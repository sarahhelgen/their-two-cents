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
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


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

  

  

  return (
    <div>

      {/* {JSON.stringify(mediaCount)}
      {JSON.stringify(productCount)}
      {JSON.stringify(businessCount)}
      {JSON.stringify(otherCount)} */}


      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Count</TableCell>
            <TableCell align="left">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">Media</TableCell>
            {/* <TableCell align="left">{mediaCount[0].count}</TableCell> */}
            <TableCell align="left"><Button variant="contained" onClick={goToMedia} endIcon={<NavigateNextIcon />}>Details</Button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Products</TableCell>
            {/* <TableCell align="left">{productCount[0].count}</TableCell> */}
            <TableCell align="left"><Button variant="contained" onClick={goToProducts} endIcon={<NavigateNextIcon />}>Details</Button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Businesses</TableCell>
            {/* <TableCell>{businessCount[0].count}</TableCell> */}
            <TableCell><Button variant="contained" onClick={goToBusiness} endIcon={<NavigateNextIcon />}>Details</Button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Other</TableCell>
            {/* <TableCell>{otherCount[0].count}</TableCell> */}
            <TableCell align="left"><Button variant ="contained" onClick ={goToOther} endIcon={<NavigateNextIcon />}>Details</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>

     

      </div>


       





  );
}

// this allows us to use <App /> in index.js
export default UserPage;
