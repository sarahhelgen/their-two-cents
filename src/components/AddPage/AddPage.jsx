import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function AddPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName ] = useState('');
    const [type, setType ] = useState('');
    const [notes, setNotes ] = useState('');
    const [category, setCategory] = useState('');

    //creating a function that takes in a newRecommendation, makes it an object, and posts to server
    const addNewRecommendation = (event) => {
        console.log('adding new rec');
        event.preventDefault();
        const newRecommendation = {
            name: name,
            type: type,
            notes: notes,
            category: category,
        }
        console.log('The new recommendation is', newRecommendation );
        dispatch({type: 'POST_REC_TO_SERVER', payload: newRecommendation });
        history.push('/user');
    }


    return (

        <form>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Type"></input>
            <input type="text" placeholder="Notes"></input>
            <select>
            <option>Media</option>
            <option>Business</option>
            <option>Product </option>
            <option>Other</option>
            </select>
            <button>Submit</button>
        </form>
    )

}
export default AddPage;