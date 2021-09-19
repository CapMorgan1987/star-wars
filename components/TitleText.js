import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';

const TitleText = (props) => {
	return (
		<View style={styles.textContainer}>
			<Text style={styles.text}>{props.children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textContainer: {
		width: '100%',
		marginBottom: 10,
		alignItems: 'center',
		paddingVertical: 10,
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Colors.textDarkGrey,
	},
});

export default TitleText;
