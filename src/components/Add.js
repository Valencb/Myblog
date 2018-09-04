import React from 'react';
import { Card,CardHeader, CardTitle, Button, CardText, CardBody, Input } from 'reactstrap';
import { connect}  from 'react-redux';
import * as actions from '../redux/actions';


const Add= (props) => (
	<div className="d-flex justify-content-center mt-4">
		 <Card className="addCard">
		 	<CardHeader> 
				<Input type="text"
				placeholder= "Add Title..."
				value= {props.title}
				onChange={event => props.updateTitle(event.target.value)}
				/>
		 	 </CardHeader>
		 		<CardBody>
		 	 	<CardTitle>
			 	 	<Input type="text"
					placeholder= "Add Author..."
					value= {props.autor}
					onChange={event => props.updateAuthor(event.target.value)}
					/>
					</CardTitle>
	         	 <CardText>
	         	 	<Input type="text"
					placeholder= "Add Content..."
					value= {props.content}
					onChange={event => props.updateContent(event.target.value)}
					/>
	         	 </CardText>
	         	 <Button onClick={props.saveAll}>
	         	 Save
	         	 </Button>
		 	</CardBody>
		 </Card>
	 </div>
);

const mapStateToProps = ({blog}) => {
	const {title} = blog;
	return {title}
}

export default connect(mapStateToProps,actions)(Add);