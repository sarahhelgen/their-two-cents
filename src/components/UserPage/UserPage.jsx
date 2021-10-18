import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const mediaCount = useSelector(store => store.recommendations.media);
  const productCount = useSelector( store => store.recommendations.product );
  const businessCount = useSelector( store => store.recommendations.business );
  const otherCount = useSelector( store => store.recommendations.other);

  useEffect(() => {
    dispatch({ type: 'FETCH_MEDIA_COUNT' });
    dispatch({ type: 'FETCH_PRODUCT_COUNT'});
    dispatch({ type: 'FETCH_BUSINESS_COUNT'});
    dispatch({ type: 'FETCH_OTHER_COUNT'});
  }, []);

  

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
    <div>

      {JSON.stringify(mediaCount)}
      {JSON.stringify(productCount)}
      {JSON.stringify(businessCount)}
      {JSON.stringify(otherCount)}

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
            <td>{mediaCount[0].count}</td>
            <td><button onClick={goToMedia}>Details</button></td>
          </tr>
          <tr>
            <td>Products</td>
            <td>{productCount[0].count}</td>
            <td><button onClick={goToProducts}>Details</button></td>
          </tr>
          <tr>
            <td>Businesses</td>
            <td>{businessCount[0].count}</td>
            <td><button onClick={goToBusiness}>Details</button></td>
          </tr>
          <tr>
            <td>Other</td>
            <td>{otherCount[0].count}</td>
            <td><button onClick ={goToOther}>Details</button></td>
          </tr>
        </tbody>
      </table>
      </div>
    


  );
}

// this allows us to use <App /> in index.js
export default UserPage;
