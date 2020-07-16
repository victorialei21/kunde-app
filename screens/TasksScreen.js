import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	FlatList,
	StatusBar,
	Dimensions,
} from 'react-native';

import DefaultButton from '../components/DefaultButton';
import Colors from '../constants/Colors';
import TaskItem from '../components/TaskItem';
import { TASKS } from '../data/dummy-data';

const TasksScreen = (props) => {
	const pastTasks = () => {
		props.navigation.navigate('Completed Tasks');
	};

	return (
		<View style={styles.screen}>
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
			<View style={styles.buttonContainer}>
				<DefaultButton
					title={'Completed Tasks'}
					onPress={pastTasks}
					style={{ margin: 20, padding: 5 }}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.background,
	},
	listContainer: {
		width: '100%',
		padding: 10,
		marginTop: 10,
		height: Dimensions.get('window').height * 0.65,
	},
	itemContainer: {
		alignItems: 'center',
	},
	buttonContainer: {
		height: Dimensions.get('window').height * 0.1,
		justifyContent: 'center',
	},
});

export default TasksScreen;
