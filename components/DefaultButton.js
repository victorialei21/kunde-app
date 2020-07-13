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
		borderRadius: 25,
		backgroundColor: Colors.blue,
		borderWidth: 1,
	},
	textContainer: {
		alignItems: 'center',
		padding: 5,
	},
});

export default DefaultButton;
