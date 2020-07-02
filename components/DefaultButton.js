import React from 'react';
import { Button, StyleSheet } from 'react-native';

const DefaultButton = (props) => {
	return (
		<Button style={styles.button} title={props.title} onPress={props.onPress} />
	);
};

const styles = StyleSheet.create({
	button: {
		fontFamily: 'rubik-regular',
		fontSize: 15,
		borderRadius: 10,
		backgroundColor: '#fff9e9',
		borderWidth: 2,
	},
});

export default DefaultButton;
