import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import DefaultText from './DefaultText';

const PillTextInput = (props) => {
	return (
		<View style={styles.container}>
			<DefaultText>{props.title}</DefaultText>
			<TextInput
				{...props}
				placeholder='Type Here'
				multiline={false}
				style={styles.input}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		margin: 10,
		borderBottomWidth: 0.5,
		padding: 10,
	},
});

export default PillTextInput;
