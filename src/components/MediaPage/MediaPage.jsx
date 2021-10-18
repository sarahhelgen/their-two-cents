import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';

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
                    {media.map((media) =>
                      <TableBody key={media.id}>
                        <TableRow>
                            <TableCell align="right">{media.name}</TableCell>
                            <TableCell align="right">{media.type}</TableCell>
                            <TableCell align="right">{media.notes}</TableCell>
                            <TableCell align="right"><button onClick={(event) => favoriteMedia(media.rec_id)}>Favorite!</button></TableCell>
                            <TableCell align="right"><button onClick={(event) => deleteMedia(media.rec_id)}>Delete</button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
               
            )}

        

    
    )
}

export default MediaPage;