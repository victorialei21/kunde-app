import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	FlatList,
} from 'react-native';

import DefaultButton from '../components/DefaultButton';
import Colors from '../constants/Colors';
import TaskItem from '../components/TaskItem';
import { TASKS } from '../data/dummy-data';

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
				<View style={styles.titleContainer}>
					<Text style={styles.title}>To Do List</Text>
				</View>
				<View style={styles.listContainer}>
					<FlatList
						style={{ width: '100%' }}
						data={TASKS}
						renderItem={({ item }) => (
							<View style={styles.itemContainer}>
								<TaskItem title={item.title} />
							</View>
						)}
						keyExtractor={(item) => item.id}
					/>
				</View>
				<View>
					<DefaultButton
						title={'Completed Tasks'}
						onPress={pastTasks}
						style={{ margin: 20, padding: 5 }}
					/>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: Colors.background,
	},
	title: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
		paddingTop: 10,
	},
	titleContainer: {
		justifyContent: 'center',
		padding: 20,
		flex: 1,
	},
	listContainer: { flex: 12, width: '95%' },
	itemContainer: {
		alignItems: 'center',
	},
});

export default TasksScreen;
