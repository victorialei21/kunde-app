import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';

import DefaultButton from '../components/DefaultButton';
import DefaultText from '../components/DefaultText';
import { PROMPTS } from '../data/dummy-data';
import Colors from '../constants/Colors';

const JournalScreen = (props) => {
	const [journalInput, setJournalInput] = useState('');

	const journalInputHandler = (enteredText) => {
		setJournalInput(enteredText);
	};

	const submitEntry = () => {
		if (journalInput !== '') {
			Alert.alert('Success', 'Journal entry submitted!');
			setJournalInput('');
			Keyboard.dismiss();
		} else {
			Alert.alert('Error', 'You cannot submit an empty journal entry.');
		}
	};
	const cancelEntry = () => {
		setJournalInput('');
	};

	const goToPastEntries = () => {
		props.navigation.navigate('PastJournal');
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.title}>Journal Prompt of the Day: </Text>
				<View style={styles.prompt}>
					<DefaultText>{PROMPTS[6]}</DefaultText>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder={'Type Here'}
						multiline={true}
						style={styles.input}
						onChangeText={journalInputHandler}
						value={journalInput}
					/>
				</View>
				<View style={styles.entryButtons}>
					<DefaultButton title={'Cancel Entry'} onPress={cancelEntry} />
					<DefaultButton title={'Submit Entry'} onPress={submitEntry} />
				</View>
				<DefaultButton
					title={'Past Journal Entries'}
					onPress={goToPastEntries}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.background,
	},
	title: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
		paddingTop: 12,
	},
	prompt: {
		borderWidth: 2,
		borderRadius: 10,
		padding: 15,
		width: '80%',
		marginVertical: 20,
		backgroundColor: Colors.orange,
	},
	input: { fontFamily: 'rubik-regular' },
	inputContainer: {
		borderWidth: 2,
		borderRadius: 10,
		padding: 10,
		marginBottom: 20,
		height: '45%',
		width: '80%',
	},
	entryButtons: {
		flexDirection: 'row',
		width: '60%',
		justifyContent: 'space-between',
		paddingTop: 10,
		paddingBottom: 15,
	},
});

export default JournalScreen;
