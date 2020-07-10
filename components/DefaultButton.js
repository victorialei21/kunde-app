import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import DefaultText from '../components/DefaultText';

const DefaultButton = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.onPress}>
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
		backgroundColor: '#24d6d2',
		borderWidth: 1,
	},
	textContainer: {
		alignContent: 'center',
		padding: 5,
	},
});

export default DefaultButton;
