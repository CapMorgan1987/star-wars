import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import TitleText from '../components/TitleText';
import ListText from '../components/ListText';

import { addFavorite } from '../store/actions';

const CharacterListDetails = (props) => {
	const characters = useSelector((state) => state.characterReducer.characters);

	const characterName = props.navigation.getParam('name');

	const selectedCharacter = characters.find(
		(character) => character.name === characterName
	);

	const dispatch = useDispatch();

	const addToFavorites = (character) => {
		dispatch(addFavorite(character));
	};

	const handleAddFavorite = () => {
		addToFavorites(selectedCharacter);
	};
	return (
		<View
			style={{
				...styles.screen,
				...{ backgroundColor: props.navigation.getParam('eye_color') },
			}}>
			<View style={styles.characterContainer}>
				<TitleText>{selectedCharacter.name}</TitleText>
				<ListText>Height: {selectedCharacter.height} cm</ListText>
				<ListText>Weight: {selectedCharacter.mass} kg</ListText>
				<ListText>Hair Color: {selectedCharacter.hair_color}</ListText>
				<ListText>Eye Color: {selectedCharacter.eye_color}</ListText>
				<ListText>Birth Year: {selectedCharacter.birth_year}</ListText>
				<ListText>Gender: {selectedCharacter.gender}</ListText>
				<View style={styles.buttonContainer}>
					<Button
						title='Add to favorite'
						color='black'
						onPress={handleAddFavorite}
					/>
				</View>
			</View>
		</View>
	);
};

CharacterListDetails.navigationOptions = () => {
	return {
		headerTitle: 'Character details',
		// headerRight: () => (
		// 	<HeaderButtons HeaderButtonComponent={FavoriteButton}>
		// 		<Item
		// 			title='Favorite'
		// 			iconName='ios-star'
		// 			onPress={() => {
		// 				console.log('Favorite');
		// 			}}
		// 		/>
		// 	</HeaderButtons>
		// ),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 20,
	},
	characterContainer: {
		flex: 1,
		width: '70%',
		alignItems: 'center',
		marginVertical: 10,
		marginHorizontal: 20,
		backgroundColor: 'white',
		borderRadius: 20,
	},
	buttonContainer: {
		marginTop: 20,
	},
});

export default CharacterListDetails;
