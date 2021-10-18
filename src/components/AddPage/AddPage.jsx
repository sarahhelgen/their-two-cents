import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

        <form onSubmit={addNewRecommendation}>
            <TextField id="outlined-basic" label="Name" variant="outlined" type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
            <TextField id="outlined-basic" label="Type" variant="outlined" type="text" placeholder="Type" value={type} onChange={(event) => setType(event.target.value)} />
            <TextField id="outlined-basic" label="Notes" variant="outlined"type="text" placeholder="Notes" value={notes} onChange={(event) => setNotes(event.target.value)} />
            <select onChange={(event) => setCategory(event.target.value)}>
                <option value={1}>Media</option>
                <option value={2}>Business</option>
                <option value={3}>Product </option>
                <option value={4}>Other</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )

}
export default AddPage;