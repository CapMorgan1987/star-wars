import React, { useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from 'react-native';

// import { useSelector, useDispatch } from 'react-redux';

// import { getCharacters } from '../store/actions';

const CharacterListScreen = (props) => {
	const data = props.navigation.getParam('data');
	// 	const dispatch = useDispatch();
	// 	const fetchCharacters = () => dispatch(getCharacters());
	// 	useEffect(() => {
	// 		fetchCharacters();
	// 		console.log(characters);
	// 	}, []);

	return (
		<View style={styles.screen}>
			<FlatList
				data={data.characters}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => props.navigation.navigate('CharacterDetails', item)}>
						<View style={styles.characterContainer}>
							<Text style={styles.characterName}>{item.name}</Text>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

CharacterListScreen.navigationOptions = () => {
	return {
		headerTitle: 'List of characters',
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
	},
	characterContainer: {
		marginVertical: 10,
		paddingVertical: 5,
		paddingHorizontal: 30,
		backgroundColor: 'black',
	},
	characterName: {
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
	},
});

export default CharacterListScreen;
