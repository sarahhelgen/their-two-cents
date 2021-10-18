import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function OtherPage () {

        const dispatch = useDispatch();
        const other = useSelector(store => store.recommendations.other );

        useEffect(() => {
            dispatch({ type: 'FETCH_OTHER' });
        }, []);

        const deleteOther = ( otherId ) => {
            dispatch({ type: 'DELETE_OTHER', payload: otherId });
        }

        const favoriteOther = () => {
            dispatch({ type: 'FAVORITE_OTHER', payload: otherId });
            
        }

    return(

        <>
        <h2>Other Recommendations Page</h2>
         {other.map((other) =>
         <TableContainer component={Paper}>
                <Table key={other.id}>
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
                            <TableCell>{other.name}</TableCell>
                            <TableCell>{other.type}</TableCell>
                            <TableCell>{other.notes}</TableCell>
                            <TableCell><button onClick={(event) => favoriteOther(other.rec_id)}>Favorite!</button></TableCell>
                            <TableCell><button onClick={(event) => deleteOther(other.rec_id)}>Delete</button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            )}
        </>
    )
}

export default OtherPage;