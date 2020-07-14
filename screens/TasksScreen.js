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
import Colors from '../constants/Colors';
import TaskItem from '../components/TaskItem';

const TasksScreen = (props) => {
	const pastTasks = () => {
		props.navigation.navigate('Past Tasks');
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.title}>To Do List</Text>
				<TaskItem />
				<TaskItem />
				<TaskItem />
				<TaskItem />
				<DefaultButton
					title={'Completed Tasks'}
					onPress={pastTasks}
					style={{ margin: 20, padding: 5 }}
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
		alignItems: 'center',
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

export default TasksScreen;
