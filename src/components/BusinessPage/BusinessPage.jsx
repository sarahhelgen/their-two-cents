import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

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
            <h2>Business Recommendation Page</h2>
            <TableContainer component={Paper}>
                <Table>
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
                            {business.map(business => {
                                <>
                                    <TableCell  key={business.id}>{business.name}</TableCell>
                                    <TableCell>{business.type}</TableCell>
                                    <TableCell>{business.notes}</TableCell>
                                    <TableCell><button onClick={(event) => favoriteBusiness(business.rec_id)}>Favorite!</button></TableCell>
                                    <TableCell><button onClick={(event) => deleteBusiness(business.rec_id)}>Delete</button></TableCell>
                                </>
                            })
                            }

                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </>

    )
}

export default BusinessPage;