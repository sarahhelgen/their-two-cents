import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function AddPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [notes, setNotes] = useState('');
    const [category, setCategory] = useState('');

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
        if (name === '') {
            alert('You must enter the name of recommendation!');
            return;
        }//end name check
        if (type === '') {
            alert('You must enter the type of recommendation!');
            return;
        }//end type check
        if (notes === '') {
            alert('Add some notes about this recommendation!');
            return;
        }//end notes check
        dispatch({ type: 'POST_REC_TO_SERVER', payload: newRecommendation });
        history.push('/user');
    }


    return (

        <FormControl fullWidth onSubmit={addNewRecommendation}>
            <TextField id="outlined-basic" label="Name" variant="outlined" type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
            <TextField id="outlined-basic" label="Type" variant="outlined" type="text" placeholder="Type" value={type} onChange={(event) => setType(event.target.value)} />
            <TextField id="outlined-basic" label="Notes" variant="outlined"type="text" placeholder="Notes" value={notes} onChange={(event) => setNotes(event.target.value)} />
            <Select label="Category" onChange={(event) => setCategory(event.target.value)}>
                <MenuItem value={1}>Media</MenuItem>
                <MenuItem value={2}>Business</MenuItem>
                <MenuItem value={3}>Product </MenuItem>
                <MenuItem value={4}>Other</MenuItem>
            </Select>
            <Button variant="contained" type="submit">Submit</Button>
        </FormControl>
    )

}
export default AddPage;