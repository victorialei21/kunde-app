import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const DefaultButton = (props) => {
	return (
		<TouchableOpacity
			style={{ ...styles.button, ...props.style }}
			onPress={props.onPress}
		>
			<View style={styles.textContainer}>
				<DefaultText>{props.title}</DefaultText>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: 3,
		borderRadius: 5,
		backgroundColor: Colors.blue,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3,
		elevation: 5,
	},
	textContainer: {
		alignItems: 'center',
		padding: 5,
	},
});

export default DefaultButton;
