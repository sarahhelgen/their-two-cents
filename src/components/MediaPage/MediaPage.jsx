import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function MediaPage() {

    const dispatch = useDispatch();
    const media = useSelector(store => store.recommendations.media);

    useEffect(() => {
        dispatch({ type: 'FETCH_MEDIA' });
    }, []);

    const deleteRecommendation = () => {
        console.log('in deleteFunction');
        dispatch({})
    }

    return (

        <>
            {media.map((media) =>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Notes</th>
                            <th>Favorite</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{media.name}</td>
                            <td>{media.type}</td>
                            <td>{media.notes}</td>
                            <td><button>Favorite!</button></td>
                            <td><button onClick={deleteRecommendation}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>



            )}



        </>
    )
}

export default MediaPage;