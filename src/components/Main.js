import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './Home';
import Add from './Add';

const Main = () => (
	<div>
	<Switch>
		<Route exact path ='/' component={Home}/>
		<Route exact path ='/add' component={Add}/>
	</Switch>
	</div>
);

export default Main;