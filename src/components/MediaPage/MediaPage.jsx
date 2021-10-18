import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

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

            <TableContainer>
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
                            <TableCell>{media.name}</TableCell>
                            <TableCell>{media.type}</TableCell>
                            <TableCell>{media.notes}</TableCell>
                            <TableCell><button onClick={(event) => favoriteMedia(media.rec_id)}>Favorite!</button></TableCell>
                            <TableCell><button onClick={(event) => deleteMedia(media.rec_id)}>Delete</button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
               
            )}

        

    
    )
}

export default MediaPage;