import React from 'react';
import { Link } from 'react-router-dom';
import { Nav,NavItem } from 'reactstrap';

const Header= () => (

	<Nav>
		<NavItem>
			<Link to="/" className="nav-link"> HOME </Link>
		</NavItem>
		<NavItem>	
			<Link to="/add" className="nav-link">    ADD </Link>
		</NavItem>
	</Nav>
);

export default Header;
