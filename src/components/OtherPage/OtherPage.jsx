import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function OtherPage () {

        const dispatch = useDispatch();
        const other = useSelector(store => store.recommendations.other );

        useEffect(() => {
            dispatch({ type: 'FETCH_OTHER' });
        }, []);

        const deleteOther = ( otherId ) => {
            dispatch({ type: 'DELETE_OTHER', payload: otherId });
        }

        const favoriteOther = () => {
            dispatch({ type: 'FAVORITE_OTHER', payload: otherId });
            
        }

    return(

        <>
         {other.map((other) =>
                <table key={other.id}>
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
                            <td>{other.name}</td>
                            <td>{other.type}</td>
                            <td>{other.notes}</td>
                            <td><button onClick={(event) => favoriteOther(other.rec_id)}>Favorite!</button></td>
                            <td><button onClick={(event) => deleteOther(other.rec_id)}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}

export default OtherPage;