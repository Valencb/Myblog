import React from 'react';
import { Link } from 'react-router-dom';
import { Nav,NavItem } from 'reactstrap';
import index from '../index.css';

const Header= () => (
	<div className="hola">
		<Nav>
			<NavItem>
				<Link to="/" className="nav-link white"> HOME </Link>
			</NavItem>
			<NavItem>	
				<Link to="/add" className="nav-link white">    ADD </Link>
			</NavItem>
		</Nav>
	</div>
);


export default Header;
