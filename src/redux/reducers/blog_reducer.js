import {

	UPDATE_TITLE,
	UPDATE_AUTHOR,
	UPDATE_CONTENT,
	SAVE_ALL

} from '../actions/actiontype';

const INITIAL_STATE= {
	title:'',
	author:'',
	content: '',
	entry: [],
}

export default (state = INITIAL_STATE, action) =>{
	switch (action.type) {
		case UPDATE_TITLE:
			console.log(state.title)
			return {...state, title: action.payload}
		case UPDATE_AUTHOR:
			console.log(state.author)
			return {...state,author:action.payload}
		case UPDATE_CONTENT:
			console.log(state.content)
			return {...state,content:action.payload}
		case SAVE_ALL:
			let blog= state.entry
			blog.push({
				title: state.title, 
				author: state.author, 
				content: state.content
			})
			return {...state, entry: blog}
		default:
		return state
	}
}