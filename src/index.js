//REACT
import React from 'react';
import ReactDOM from 'react-dom';
//REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
//REACT ROUTER
import {BrowserRouter } from 'react-router-dom';
//STYLE
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// COMPONENTS
import App from './components/App';

const Root= () => (
	<BrowserRouter>
		<Provider store= {createStore(reducers)}>
			<App/>
		</Provider>
	</BrowserRouter>
);


ReactDOM.render(<Root />, document.getElementById('root'));

