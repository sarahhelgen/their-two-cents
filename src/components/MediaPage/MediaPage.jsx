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

function MediaPage() {

    const dispatch = useDispatch();
    const media = useSelector(store => store.recommendations.media);

    useEffect(() => {
        dispatch({ type: 'FETCH_MEDIA' });
    }, []);

    const deleteMedia = (mediaId) => {
        console.log('in deleteFunction', mediaId );
        dispatch({ type: 'DELETE_MEDIA', payload: mediaId})
    }

    const favoriteMedia = (mediaId) => {
        console.log('in update media', mediaId );
        dispatch({ type:'FAVORITE_MEDIA', payload: mediaId })
    }

    return (

       <div>

            <h2>Media Recommendations Page</h2>

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
                            {
                                media.map(media => (
                                    <>
                                    <TableCell>{media.name}</TableCell>
                                    <TableCell>{media.type}</TableCell>
                                    <TableCell>{media.notes}</TableCell>
                                    <TableCell><Button variant="text" onClick={(event) => favoriteMedia(media.rec_id)}><FavoriteIcon /></Button></TableCell>
                                    <TableCell><Button variant="text" onClick={(event) => deleteMedia(media.rec_id)}><DeleteIcon /></Button></TableCell>
                                    </>
                                ))
                            }
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>

            </div>
    
    )
}

export default MediaPage;