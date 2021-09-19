import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const FavoriteCharactersScreen = () => {
	const favorites = useSelector((state) => state.characterReducer.favorites);

	return (
		<View style={styles.screen}>
			{favorites.length === 0 ? (
				<Text style={{ color: '#010101', fontSize: 18 }}>
					Add some characters.
				</Text>
			) : (
				<View style={styles.list}>
					<FlatList
						data={favorites}
						keyExtractor={(item) => item.name}
						renderItem={({ item }) => (
							<View style={styles.characterContainer}>
								<Text style={styles.characterName}>{item.name}</Text>
							</View>
						)}
					/>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	list: {
		marginTop: 40,
	},
	characterContainer: {
		marginVertical: 10,
		paddingVertical: 5,
		paddingHorizontal: 30,
		alignItems: 'center',
		backgroundColor: 'lightgrey',
	},
	characterName: {
		fontSize: 18,
		color: 'darkgrey',
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default FavoriteCharactersScreen;
