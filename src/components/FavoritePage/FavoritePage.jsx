import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function FavoritePage() {

    const dispatch = useDispatch();
    const favorites = useSelector(store => store.recommendations.favorite);

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' });
    }, []);

    const deleteFavorite = (favoriteId) => {
        console.log('in deleteFavorite');
        dispatch({ type: 'DELETE_FAVORITE', payload: favoriteId })

    }

    return (

        <>
            <h2>Favorites Page</h2>
            {/* {JSON.stringify(favorites)} */}
            {favorites.map((favorite) =>
                <table key={favorite.id}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Notes</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{favorite.name}</td>
                            <td>{favorite.type}</td>
                            <td>{favorite.notes}</td>
                            <td><button onClick={(event) => deleteFavorite(favorite.rec_id)}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}

export default FavoritePage;