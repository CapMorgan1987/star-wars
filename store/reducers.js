import { GET_CHARACTERS, ADD_FAVORITE_ITEM } from './actions';

const initialState = {
	characters: [],
	favorites: [],
};

function characterReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CHARACTERS:
			return { ...state, characters: action.payload };
		case ADD_FAVORITE_ITEM:
			return { ...state, favorites: [...state.favorites, action.payload] };
		default:
			return state;
	}
}
export default characterReducer;
