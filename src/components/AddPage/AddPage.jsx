import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

function AddPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [notes, setNotes] = useState('');
    const [category, setCategory] = useState(1);
    const [nameError, setNameError] = useState(false);
    const [typeError, setTypeError] = useState(false);
    const [notesError, setNotesError] = useState(false);

    const useStyles = makeStyles({
        radio: {
            '&$checked': {
                color: '##e07a5f'
            }
        },
        checked: {}


    })

    const classes = useStyles();

    //creating a function that on click of submit button takes in a newRecommendation, makes it an object, and posts to server
    const addNewRecommendation = (event) => {
        console.log('adding new rec');
        event.preventDefault();
        const newRecommendation = {
            name: name,
            type: type,
            notes: notes,
            category: category,
        }
        console.log('The new recommendation is', newRecommendation);
        // setNameError(false)
        // setTypeError(false)
        // setNotesError(false)
        if (name === '') {
            setNameError(true);
            return;
        }//end name check
        if (type === '') {
            setTypeError(true);
            return;
        }//end type check
        if (notes === '') {
            setNotesError(true);
            return;
        }//end notes check
        dispatch({ type: 'POST_REC_TO_SERVER', payload: newRecommendation });
        history.push('/user');
    }


    return (

        <div>
            <Typography variant="h5" align="left">
                Add Your Recommendation!
            </Typography>

            <Container component={Paper}>
                <form noValidate autoComplete="off" onSubmit={addNewRecommendation}>
                    <TextField className={classes.field} fullWidth error={nameError} id="outlined-basic" label="Name" variant="outlined" type="text" required value={name} onChange={(event) => setName(event.target.value)} />
                    <TextField className={classes.field} fullWidth error={typeError} id="outlined-basic" label="Type" variant="outlined" type="text" required value={type} onChange={(event) => setType(event.target.value)} />
                    <TextField className={classes.field} fullWidth error={notesError} multiline rows={4} id="outlined-basic" label="Notes" variant="outlined" type="text" required value={notes} onChange={(event) => setNotes(event.target.value)} />
                    <FormControl>
                        <FormLabel>Choose a category: </FormLabel>
                        <RadioGroup value={category} onChange={(event) => setCategory(event.target.value)}  classes={{root: classes.radio, checked: classes.checked}}>
                            <FormControlLabel value={1} control={<Radio />} label="Media" />
                            <FormControlLabel value={2} control={<Radio />} label="Business" />
                            <FormControlLabel value={3} control={<Radio />} label="Product" />
                            <FormControlLabel value={4} control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <Button style={{ backgroundColor: '#81b29a' }} variant="contained" type="submit" endIcon={<KeyboardArrowRightIcon />}>Submit</Button>
                </form>
            </Container>

        </div>
    )

}
export default AddPage;