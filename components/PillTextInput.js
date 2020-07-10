import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import DefaultText from './DefaultText';

const PillTextInput = (props) => {
	return (
		<View style={styles.container}>
			<DefaultText>{props.title}</DefaultText>
			<TextInput
				{...props}
				placeholder={'Type Here'}
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
		width: '90%',
		borderRadius: 10,
		borderWidth: 1,
		margin: 10,
		padding: 10,
	},
	title: {},
	input: {},
});

export default PillTextInput;
