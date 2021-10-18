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
                            <TableCell><Button variant="text" onClick={(event) => favoriteOther(other.rec_id)}><FavoriteIcon /></Button></TableCell>
                            <TableCell><Button variant="text" onClick={(event) => deleteOther(other.rec_id)}><DeleteIcon /></Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            )}
        </>
    )
}

export default OtherPage;