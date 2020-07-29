import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultHeaderText = (props) => {
	return (
		<Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		fontFamily: 'rubik-medium',
		color: 'black',
		fontSize: 20,
	},
});

export default DefaultHeaderText;
