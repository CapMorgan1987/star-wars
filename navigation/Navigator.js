import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import CharacterListScreen from '../screens/CharacterListScreen';
import CharacterListDetails from '../screens/CharacterListDetails';
import FavoriteCharactersScreen from '../screens/FavoriteCharactersScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: 'black',
	},
	headerTintColor: Colors.gold,
};

const CharactersNavigator = createStackNavigator(
	{
		Welcome: WelcomeScreen,
		CharacterList: CharacterListScreen,
		CharacterDetails: CharacterListDetails,
	},
	{
		defaultNavigationOptions: defaultStackNavOptions,
	}
);

const TabNavigator = createBottomTabNavigator(
	{
		List: {
			screen: CharactersNavigator,
			navigationOptions: {
				tabBarLabel: 'Characters',
				tabBarIcon: (tabInfo) => {
					return (
						<Ionicons
							name='people-circle'
							size={25}
							color={tabInfo.tintColor}
						/>
					);
				},
			},
		},
		Favorites: {
			screen: FavoriteCharactersScreen,
			navigationOptions: {
				tabBarLabel: 'Favorites!',
				tabBarIcon: (tabInfo) => {
					return (
						<Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
					);
				},
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: Colors.gold,
			activeBackgroundColor: 'black',
		},
	}
);

export default createAppContainer(TabNavigator);
