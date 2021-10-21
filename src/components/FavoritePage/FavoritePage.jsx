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
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import {useState} from 'react';

function FavoritePage() {

    const dispatch = useDispatch();
    const favorites = useSelector(store => store.recommendations.favorite);
    const [toggleFavorite, setToggleFavorite ] = useState(true);

    const useStyles = makeStyles({
        deleteButton: {
            color: '#81b29a'
        }
        
})

const classes = useStyles();

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' });
    }, []);

    const deleteFavorite = (favoriteId) => {
        console.log('in deleteFavorite');
        dispatch({ type: 'DELETE_FAVORITE', payload: favoriteId })

    }

    return (

        <>
            <Box p={2}>
            <Typography variant="h5" align="left">
                Favorites! <FavoriteIcon />
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
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {favorites.map((favorite) =>
                            <TableRow key={favorite.id}>
                                <TableCell align="left">{favorite.name}</TableCell>
                                <TableCell align="left">{favorite.type}</TableCell>
                                <TableCell align="left">{favorite.notes}</TableCell>
                                <TableCell align="left"><Button variant="text" onClick={(event) => deleteFavorite(favorite.rec_id)}><DeleteIcon className={classes.deleteButton}/></Button></TableCell>
                            </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Box>
        </>
    )
}

export default FavoritePage;