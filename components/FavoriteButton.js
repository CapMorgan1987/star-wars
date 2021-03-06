import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const FavoriteButton = (props) => {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={Colors.gold}
		/>
	);
};

const styles = StyleSheet.create({});

export default FavoriteButton;
