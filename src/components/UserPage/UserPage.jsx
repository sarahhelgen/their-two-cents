import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const recommendations = useSelector(store => store.recommendations.recommendations);

  useEffect(() => {
    dispatch({ type: 'FETCH_RECOMMENDATIONS' });
  }, []);

  console.log('The recommendations are', recommendations);

  const goToMedia = () =>{
    history.push('/media');
  }

  const goToBusiness = () => {
    history.push('/business');
  }

  const goToProducts = () => {
    history.push('/product');
  }

  const goToOther = () => {
    history.push('/other');
  }


  return (

    <div className="container">
      <h2>Welcome, {user.username}!</h2>

      {/* {JSON.stringify({ recommendations })}  */}
      {recommendations.map((recommendation) =>
        <div key={recommendation.id}>{recommendation.name}
          {recommendation.type}
          {recommendation.notes}
        </div>

      )}

      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Count</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Media</td>
            <td>number of recs</td>
            <td><button onClick={goToMedia}>Details</button></td>
          </tr>
          <tr>
            <td>Products</td>
            <td>number of recs</td>
            <td><button onClick={goToProducts}>Details</button></td>
          </tr>
          <tr>
            <td>Businesses</td>
            <td>number of recs</td>
            <td><button onClick={goToBusiness}>Details</button></td>
          </tr>
          <tr>
            <td>Other</td>
            <td>number of recs</td>
            <td><button onClick ={goToOther}>Details</button></td>
          </tr>
        </tbody>
      </table>
    </div>


  );
}

// this allows us to use <App /> in index.js
export default UserPage;
