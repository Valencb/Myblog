import {
	UPDATE_TITLE,
	UPDATE_AUTHOR,
	UPDATE_CONTENT,
	SAVE_ALL
} from './actiontype';

export const updateTitle = title =>{
	return {
		type: UPDATE_TITLE,
		payload: title
	}
}

export const updateAuthor= author =>{
	return {
		type: UPDATE_AUTHOR,
		payload: author
	}
}

export const updateContent= content =>{
	return{
		type: UPDATE_CONTENT,
		payload: content
	}
}
export const saveAll= () =>{
	return {
		type: SAVE_ALL,
		payload: ''

	}
}

