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


function ProductPage () {
    const dispatch = useDispatch();
    const products = useSelector(store => store.recommendations.product);

    useEffect(() => {
        dispatch({ type: 'FETCH_PRODUCTS' });
    }, []);

    const deleteProduct = (productId) => {
        console.log('in delete product', productId );
        dispatch({ type: 'DELETE_PRODUCT', payload: productId })
    }

    const favoriteProduct = (productId) => {
        console.log( 'in update product', productId );
        dispatch({ type: 'FAVORITE_PRODUCT', payload: productId })
    }

    return(



        <>
            <h2>Products Page</h2>
        
        {products.map((product) =>
            <TableContainer component={Paper}>
                <Table key={product.id}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Notes</TableCell>
                            <TableCell>Favorite</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.type}</TableCell>
                            <TableCell>{product.notes}</TableCell>
                            <TableCell><Button variant="text" onClick={(event) => favoriteProduct(product.rec_id)}>Favorite!</Button></TableCell>
                            <TableCell><Button variant="text" onClick={(event) => deleteProduct(product.rec_id)}>Delete</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            )}
        </>
    )
}

export default ProductPage;