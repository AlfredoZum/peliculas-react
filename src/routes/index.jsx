import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/home/index';
//import { MovieList, MoviesDetail, MoviesForm } from '../components/movies';

const Routes = () => (

    <Switch>>
        <Route exact path='/' component={HomePage} />
        { /* <Route render={ () => <p>Pagina no encontrada</p> } /> */ }
        <Redirect to='/' />

    </Switch>

);

export default Routes;
