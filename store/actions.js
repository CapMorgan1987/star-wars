import axios from 'axios';

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';

export const getCharacters = () => {
	try {
		return async (dispatch) => {
			const response = await axios.get('https://swapi.dev/api/people');
			const results = response.data.results;
			if (results) {
				dispatch({
					type: GET_CHARACTERS,
					payload: results,
				});
			} else {
				console.log('Unable to fetch');
			}
		};
	} catch (error) {
		console.error(error);
	}
};

export const addFavorite = (character) => (dispatch) => {
	dispatch({
		type: ADD_FAVORITE_ITEM,
		payload: character,
	});
};
