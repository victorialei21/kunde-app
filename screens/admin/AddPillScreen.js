import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
} from 'react-native';

import DefaultButton from '../../components/DefaultButton';
import PillTextInput from '../../components/PillTextInput';
import Colors from '../../constants/Colors';
import DefaultHeaderText from '../../components/DefaultHeaderText';

const AddPillScreen = (props) => {
	const [pillReminders, setPillReminders] = useState([]);

	const addPillHandler = () => {
		setPillReminders((currentReminders) => [
			...currentReminders,
			{ id: Math.random().toString(), value: pillTitle },
		]);
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<KeyboardAvoidingView style={styles.screen} behavior='height'>
				<DefaultHeaderText>Enter Pill Details</DefaultHeaderText>
				<View style={styles.inputContainer}>
					<PillTextInput title='Name' />
					<PillTextInput title='Dosage (mg)' keyboardType='number-pad' />
					<PillTextInput title='Quantity' keyboardType='number-pad' />
					<PillTextInput title='Time' />
					<PillTextInput title='Day(s) of Week' />
				</View>
				<View style={styles.saveButton}>
					<DefaultButton title='Save' onPress={addPillHandler} />
				</View>
			</KeyboardAvoidingView>
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
	saveButton: {
		padding: 20,
	},
	inputContainer: {
		width: '90%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default AddPillScreen;
