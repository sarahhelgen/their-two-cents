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
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

            <Typography variant="h5" align="center">
                Favorites! <FavoriteIcon />
            </Typography>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Notes</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {favorites.map((favorite) =>
                            <TableRow key={favorite.id}>
                                <TableCell>{favorite.name}</TableCell>
                                <TableCell>{favorite.type}</TableCell>
                                <TableCell>{favorite.notes}</TableCell>
                                <TableCell><Button variant="text" onClick={(event) => deleteFavorite(favorite.rec_id)}><DeleteIcon /></Button></TableCell>
                            </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
        </>
    )
}

export default FavoritePage;