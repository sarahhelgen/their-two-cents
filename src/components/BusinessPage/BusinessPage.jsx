import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

function BusinessPage() {

    const dispatch = useDispatch();
    const business = useSelector(store => store.recommendations.business)


    useEffect(() => {
        dispatch({ type: 'FETCH_BUSINESS' });
    }, []);

    const favoriteBusiness = (businessId) => {
        dispatch({ type: 'FAVORITE_BUSINESS', payload: businessId })
    }

    const deleteBusiness = (businessId) => {
        dispatch({ type: 'DELETE_BUSINESS', payload: businessId })
    }

    return (

        <>

            <Typography variant="h5" align="center">
                Business Recommendations
            </Typography>

            <TableContainer component={Paper}>
                <Table>
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
                        {business.map(business =>
                            <TableRow key={business.id}>
                                <TableCell align="left">{business.name}</TableCell>
                                <TableCell align="left">{business.type}</TableCell>
                                <TableCell align="left">{business.notes}</TableCell>
                                <TableCell align="left"><Button variant="text" onClick={(event) => favoriteBusiness(business.rec_id)}><FavoriteIcon /></Button></TableCell>
                                <TableCell align="left"><Button variant="text" onClick={(event) => deleteBusiness(business.rec_id)}><DeleteIcon /></Button></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

        </>

    )
}

export default BusinessPage;