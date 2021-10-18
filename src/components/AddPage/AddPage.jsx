import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function AddPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [notes, setNotes] = useState('');
    const [category, setCategory] = useState('');
    const [nameError, setNameError ] = useState(false);
    const [typeError, setTypeError ] = useState(false);
    const [notesError, setNotesError ] = useState(false);

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

        <Container>
        <form noValidate autoComplete="off" onSubmit={addNewRecommendation}>
            <TextField fullWidth error={nameError} id="outlined-basic" label="Name" variant="outlined" type="text" required value={name} onChange={(event) => setName(event.target.value)} />
            <TextField fullWidth error={typeError} id="outlined-basic" label="Type" variant="outlined" type="text" required value={type} onChange={(event) => setType(event.target.value)} />
            <TextField fullWidth error={notesError} multiline rows={4} id="outlined-basic" label="Notes" variant="outlined"type="text" required value={notes} onChange={(event) => setNotes(event.target.value)} />
            <Select label="Category" onChange={(event) => setCategory(event.target.value)}>
                <MenuItem value={1}>Media</MenuItem>
                <MenuItem value={2}>Business</MenuItem>
                <MenuItem value={3}>Product </MenuItem>
                <MenuItem value={4}>Other</MenuItem>
            </Select>
            <Button variant="contained" type="submit">Submit</Button>
        </form>
        </Container>
    )

}
export default AddPage;