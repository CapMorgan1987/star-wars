import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListText = (props) => {
	return (
		<View style={styles.textContainer}>
			<Text style={styles.text}>{props.children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textContainer: {
		marginVertical: 5,
	},
	text: {
		fontSize: 16,
	},
});

export default ListText;
