import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function FavoritePage() {

    const dispatch = useDispatch();
    const favorites = useSelector(store => store.recommendations.favorite);

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' });
    }, []);

    const deleteFavorite = (favoriteId) => {
        console.log('in deleteFavorite');
        dispatch({ type: 'DELETE_FAVORITE', payload: favoriteId })

    }

    return (

        <>
            <h2>Favorites Page</h2>
            {/* {JSON.stringify(favorites)} */}

            {favorites.map((favorite) =>
                <TableContainer component={Paper}>
                <Table key={favorite.id}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Notes</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{favorite.name}</TableCell>
                            <TableCell>{favorite.type}</TableCell>
                            <TableCell>{favorite.notes}</TableCell>
                            <TableCell><button onClick={(event) => deleteFavorite(favorite.rec_id)}>Delete</button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            )}
        </>
    )
}

export default FavoritePage;