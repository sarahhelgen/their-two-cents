import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const recommendations = useSelector(store => store.recommendations.recommendations);

  useEffect(() => {
    dispatch({ type: 'FETCH_RECOMMENDATIONS' });
  }, []);

  console.log('the recommendations are', recommendations);

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

    </div>
 

  );
}

// this allows us to use <App /> in index.js
export default UserPage;
