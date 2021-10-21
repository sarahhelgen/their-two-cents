import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';


function ProductPage() {
    const dispatch = useDispatch();
    const products = useSelector(store => store.recommendations.product);

    const useStyles = makeStyles({
        likeButton: {
            color: '#e07a5f'
        },
        deleteButton: {
            color: '#81b29a'
        },
    })

    const classes = useStyles();

    useEffect(() => {
        dispatch({ type: 'FETCH_PRODUCTS' });
    }, []);

    const deleteProduct = (productId) => {
        console.log('in delete product', productId);
        dispatch({ type: 'DELETE_PRODUCT', payload: productId })
    }

    const favoriteProduct = (productId) => {
        console.log('in update product', productId);
        dispatch({ type: 'FAVORITE_PRODUCT', payload: productId })
    }

    return (

        <>
            <Box p={2}>
            <Typography variant="h5" align="left">
                Product Recommendations
            </Typography>
            </Box>

            <Box p={2}>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">Notes</TableCell>
                            <TableCell align="left">Favorite</TableCell>
                            <TableCell align="left">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) =>
                            <TableRow key={product.id}>
                                <TableCell align="left">{product.name}</TableCell>
                                <TableCell align="left">{product.type}</TableCell>
                                <TableCell align="left">{product.notes}</TableCell>
                                <TableCell align="left"><Button variant="text" onClick={(event) => favoriteProduct(product.rec_id)}><FavoriteIcon className={classes.likeButton}/></Button></TableCell>
                                <TableCell align="left"><Button variant="text" onClick={(event) => deleteProduct(product.rec_id)}><DeleteIcon className={classes.deleteButton}/></Button></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </>
    )


}

export default ProductPage;