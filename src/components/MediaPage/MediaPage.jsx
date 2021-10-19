import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

function MediaPage() {

    const dispatch = useDispatch();
    const media = useSelector(store => store.recommendations.media);

    useEffect(() => {
        dispatch({ type: 'FETCH_MEDIA' });
    }, []);

    const deleteMedia = (mediaId) => {
        console.log('in deleteFunction', mediaId);
        dispatch({ type: 'DELETE_MEDIA', payload: mediaId })
    }

    const favoriteMedia = (mediaId) => {
        console.log('in update media', mediaId);
        dispatch({ type: 'FAVORITE_MEDIA', payload: mediaId })
    }

    return (

        <div>

            <Typography variant="h5" align="center">
                Media Recommendations
            </Typography>

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

                        {media.map(media =>
                            <TableRow>
                                <TableCell align="left">{media.name}</TableCell>
                                <TableCell align="left">{media.type}</TableCell>
                                <TableCell align="left">{media.notes}</TableCell>
                                <TableCell align="left"><Button variant="text" onClick={(event) => favoriteMedia(media.rec_id)}><FavoriteIcon /></Button></TableCell>
                                <TableCell align="left"><Button variant="text" onClick={(event) => deleteMedia(media.rec_id)}><DeleteIcon /></Button></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>

    )
}

export default MediaPage;