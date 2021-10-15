import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function BusinessPage () {

    const dispatch = useDispatch();
    const business = useSelector(store => store.recommendations.business)


    useEffect(() => {
        dispatch({ type: 'FETCH_BUSINESS' });
    }, []);

    return(

           
        <>

        {JSON.stringify(business)}

        {business.map((business) =>
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
                        <td>{business.name}</td>
                        <td>{business.type}</td>
                        <td>{business.notes}</td>
                        <td><button onClick={(event) => favoriteBusiness(business.rec_id)}>Favorite!</button></td>
                        <td><button onClick={(event) => deleteBusiness(business.rec_id)}>Delete</button></td>
                    </tr>
                </tbody>
            </table>



        )}

        </>
       
    )
}

export default BusinessPage;