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
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';


function OtherPage() {

    const dispatch = useDispatch();
    const other = useSelector(store => store.recommendations.other);
    

    useEffect(() => {
        dispatch({ type: 'FETCH_OTHER' });
    }, []);

    const useStyles = makeStyles({
            likeButton :{
                color: '#e07a5f',
            },
            deleteButton: {
                color: '#81b29a',
            },
            header: {
                fontFamily: 'Reem Kufi',
            }
            
    })

    const classes = useStyles();

    const deleteOther = (otherId) => {
        dispatch({ type: 'DELETE_OTHER', payload: otherId });
    }

    const favoriteOther = (otherId) => {
        dispatch({ type: 'FAVORITE_OTHER', payload: otherId });

    }

    return (


        <div>
            <Box p={2}>
            <Typography className={classes.header}variant="h5" align="left">
                Other Recommendations
            </Typography>
            </Box>

            <Box p={2}>
            <TableContainer component={Paper} variant="outlined" elevation={8}>
                <Table className={classes.table} size={"small"}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{ fontWeight: 700 }}>Name</TableCell>
                            <TableCell align="left" style={{ fontWeight: 700 }}>Type</TableCell>
                            <TableCell align="left" style={{ fontWeight: 700 }}>Notes</TableCell>
                            <TableCell align="left" style={{ fontWeight: 700 }}>Favorite</TableCell>
                            <TableCell align="left" style={{ fontWeight: 700 }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {other.map((other) =>
                            <TableRow key={other.id}>
                                <TableCell align="left">{other.name}</TableCell>
                                <TableCell align="left">{other.type}</TableCell>
                                <TableCell align="left">{other.notes}</TableCell>
                                <TableCell align="left"><Button variant="text" onClick={(event) => favoriteOther(other.rec_id)}><FavoriteIcon className={classes.likeButton} /></Button></TableCell>
                                <TableCell align="left"><Button variant="text" onClick={(event) => deleteOther(other.rec_id)}><DeleteIcon className={classes.deleteButton}/></Button></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>  
            </TableContainer>
            </Box>


        </div>



    )
}

export default OtherPage;