import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';

import { store } from './store/store';

import TabNavigator from './navigation/Navigator';

const fetchFonts = () => {
	return Font.loadAsync({
		star: require('./assets/fonts/Starjedi.ttf'),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	return (
		<Provider store={store}>
			<TabNavigator />
		</Provider>
	);
}
