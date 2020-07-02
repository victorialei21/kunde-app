import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import DefaultButton from '../components/DefaultButton';
import DefaultText from '../components/DefaultText';
import { PROMPTS } from '../data/dummy-data';

const JournalScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Journal Prompt of the Day: </Text>
			<View style={styles.prompt}>
				<DefaultText>{PROMPTS[5]}</DefaultText>
			</View>
			<DefaultButton
				title={'Past Journal Entries'}
				onPress={() => props.navigation.navigate('JournalStackScreen')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff9e9',
	},
	title: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
	},
	prompt: {
		borderWidth: 2,
		borderRadius: 10,
		padding: 10,
		width: '80%',
		marginVertical: 20,
		backgroundColor: 'yellow',
	},
});

export default JournalScreen;
