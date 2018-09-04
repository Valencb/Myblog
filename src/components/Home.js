import React from 'react';
import { Card,CardColumns, CardHeader, CardTitle, Button, CardText, CardBody, CardSubtitle } from 'reactstrap';
import PropTypes from"prop-types";
import { connect}  from 'react-redux';
import * as actions from '../redux/actions/index';

const Home= props => {
	console.log(props.entry)
	return (
	<CardColumns>
		<Card className="mt-4">
			<CardBody>
				<CardTitle value={props.entry.title}></CardTitle>
	         	 <CardSubtitle>{props.entry.author}</CardSubtitle>
	         	 <CardText>{props.entry.content}</CardText>
	         	 <Button>Button</Button>
			</CardBody>
		</Card>
	</CardColumns>
	)
};

const mapStateToProps = ({blog}) => {
	const {entry} = blog;
	return {entry}
}

export default connect(mapStateToProps,actions)(Home);

