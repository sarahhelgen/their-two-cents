import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AddPage from '../AddPage/AddPage';
import FavoritePage from '../FavoritePage/FavoritePage';
import MediaPage from '../MediaPage/MediaPage';
import BusinessPage from '../BusinessPage/BusinessPage';
import ProductPage from '../ProductPage/ProductPage';
import OtherPage from '../OtherPage/OtherPage';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>
          <ProtectedRoute
            //this is the route for the add a recommendation page
            exact
            path="/add"
          >
            <AddPage />
          </ProtectedRoute>

          <ProtectedRoute
            //this is the route for the favorite page
            exact
            path="/favorite"
          >

            <FavoritePage />
          </ProtectedRoute>

          <ProtectedRoute
            //this is the route for the media page
            exact
            path="/media"
          >
            <MediaPage />
          </ProtectedRoute>

          <ProtectedRoute
          //this is the route for the business page
            exact
            path="/business"
          >
            <BusinessPage />
          </ProtectedRoute>

          <ProtectedRoute
            //this is the route for the product page
            exact
            path="/product"
          >
            <ProductPage />
          </ProtectedRoute>

          <ProtectedRoute
          //this is the route for the other page
            exact
            path="/other"
          >
            <OtherPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
