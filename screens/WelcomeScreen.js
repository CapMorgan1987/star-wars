import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { getCharacters } from '../store/actions';

const WelcomeScreen = (props) => {
	const characters = useSelector((state) => state.characterReducer);
	const dispatch = useDispatch();
	const fetchCharacters = () => dispatch(getCharacters());
	useEffect(() => {
		fetchCharacters();
	}, []);

	// const [data, setData] = useState([]);

	// const getCharacters = async () => {
	// 	try {
	// 		const data = await fetch('https://swapi.dev/api/people');
	// 		const json = await data.json();
	// 		setData(json.results);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	// useEffect(() => {
	// 	getCharacters();
	// }, []);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Welcome</Text>
			<Image
				style={styles.image}
				source={{
					uri: 'https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest/scale-to-width-down/1000?cb=20190313021755',
				}}
			/>
			<View style={styles.buttonContainer}>
				<Button
					color={'grey'}
					title='Star Wars Characters'
					onPress={() =>
						props.navigation.replace('CharacterList', {
							data: characters,
						})
					}
				/>
			</View>
		</View>
	);
};

WelcomeScreen.navigationOptions = () => {
	return {
		headerTitle: 'Star Wars App',
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
	},
	title: {
		fontSize: 18,
		fontFamily: 'star',
		color: 'white',
	},
	image: {
		width: 300,
		height: 200,
		marginVertical: 30,
	},
	buttonContainer: {
		width: 200,
	},
});

export default WelcomeScreen;
