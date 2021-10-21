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
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';


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

  const useStyles = makeStyles({
    addButton: {
      color: '#e07a5f',
    },
    detailsButton: {
      color: '#81b29a',
    },
  })

  const classes = useStyles();



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

  const goToAddPage = () => {
    history.push('/add');
  }





  return (
    <div>

      {JSON.stringify(mediaCount)}
      {JSON.stringify(productCount)}
      {JSON.stringify(businessCount)}
      {JSON.stringify(otherCount)} 

      <Box p={1}>
      <Typography variant="h4" align="left">
        Welcome to Their Two Cents!
      </Typography>
      </Box>
      <Box p={1}>
        <Typography variant="h5" >
        Here are your current recommendations:
        </Typography>
        </Box>

      <Box p={2}>
      <TableContainer component={Paper}>
        <Table size="small">
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
              <TableCell align="left"><Button style={{backgroundColor: '#81b29a'}} variant="contained" onClick={goToMedia} endIcon={<NavigateNextIcon />}>Details</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Products</TableCell>
              {/* <TableCell align="left">{productCount[0].count}</TableCell> */}
              <TableCell align="left"><Button style={{backgroundColor: '#81b29a'}} variant="contained" onClick={goToProducts} endIcon={<NavigateNextIcon />}>Details</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Businesses</TableCell>
              {/* <TableCell>{businessCount[0].count}</TableCell> */}
              <TableCell><Button style={{backgroundColor: '#81b29a'}} variant="contained" onClick={goToBusiness} endIcon={<NavigateNextIcon />}>Details</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Other</TableCell>
              {/* <TableCell>{otherCount[0].count}</TableCell> */}
              <TableCell align="left"><Button style={{backgroundColor: '#81b29a'}} variant="contained" onClick={goToOther} endIcon={<NavigateNextIcon />}>Details</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Box>

      <Box sx={{p:2, display: 'flex', justifyContent: 'flex-end'}}>
      <Button variant="contained" style={{backgroundColor: '#e07a5f'}} size="large" onClick={goToAddPage}>ADD RECOMMENDATION </Button>
      </Box>

    </div>








  );
}

// this allows us to use <App /> in index.js
export default UserPage;
