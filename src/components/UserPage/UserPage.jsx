import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const recommendations = useSelector((store) => store.recommendations);

  useEffect(() => {
    dispatch({ type: 'FETCH_RECOMMENDATIONS' });
}, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>


      <section>
       {JSON.stringify({recommendations})}
      </section>
    </div>
  

  );
}

// this allows us to use <App /> in index.js
export default UserPage;
