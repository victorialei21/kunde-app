import React from 'react';
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	TextInput,
	Dimensions,
	Platform,
	Alert,
} from 'react-native';

import DefaultButton from '../../components/DefaultButton';
import Colors from '../../constants/Colors';
import DefaultHeaderText from '../../components/DefaultHeaderText';

const AddTaskToMany = (props) => {
	const saveHandler = () => {
		return Alert.alert('Success!');
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<KeyboardAvoidingView
				style={styles.screen}
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
			>
				<DefaultHeaderText>Enter Task Details</DefaultHeaderText>
				<View style={styles.inputContainer}>
					<TextInput
						multiline={true}
						placeholder='Type here...'
						numberOfLines={15}
						style={{ fontFamily: 'rubik-regular' }}
						textAlignVertical={'top'}
					/>
				</View>
				<View style={styles.saveButton}>
					<DefaultButton title='Save' onPress={saveHandler} />
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
		width: '80%',
		height: Dimensions.get('window').height * 0.35,
		borderWidth: 1,
		borderRadius: 10,
		margin: 10,
		padding: 20,
	},
});

export default AddTaskToMany;
