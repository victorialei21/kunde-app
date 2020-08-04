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
	FlatList,
} from 'react-native';

import DefaultButton from '../../components/DefaultButton';
import Colors from '../../constants/Colors';
import DefaultHeaderText from '../../components/DefaultHeaderText';
import { USERS } from '../../data/dummy-data';
import AssignUserItem from '../../components/AssignUserItem';

const AddTaskToMany = (props) => {
	const saveHandler = () => {
		return Alert.alert('Success!', 'You added a task ');
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
				<View style={styles.headerContainer}>
					<DefaultHeaderText>Enter Task Details</DefaultHeaderText>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						multiline={true}
						placeholder='Type here...'
						numberOfLines={15}
						style={{ fontFamily: 'rubik-regular' }}
						textAlignVertical={'top'}
					/>
				</View>
				<View style={styles.assignHeaderContainer}>
					<DefaultHeaderText>Assign To:</DefaultHeaderText>
				</View>
				<View style={styles.assignContainer}>
					<FlatList
						data={USERS}
						renderItem={({ item }) => (
							<View>
								<AssignUserItem title={item.name} admin={true} />
							</View>
						)}
					/>
				</View>
				<View style={styles.buttonContainer}>
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
	headerContainer: {
		flex: 1,
		margin: 10,
		justifyContent: 'center',
	},
	buttonContainer: {
		margin: 10,
		flex: 1,
		justifyContent: 'center',
	},
	inputContainer: {
		width: '80%',
		height: Dimensions.get('window').height * 0.35,
		borderWidth: 1,
		borderRadius: 10,
		margin: 5,
		padding: 20,
		flex: 3,
		borderWidth: 1,
	},
	assignHeaderContainer: {
		margin: 10,
		flex: 1,
		justifyContent: 'center',
	},
	assignContainer: {
		flex: 4,
		borderWidth: 1,
		borderRadius: 10,
		width: '70%',
	},
});

export default AddTaskToMany;
