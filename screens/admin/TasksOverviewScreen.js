import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Colors from '../../constants/Colors';
import TaskItem from '../../components/TaskItem';
import { TASKS } from '../../data/dummy-data';

const TasksOverviewScreen = (props) => {
	return (
		<View style={styles.screen}>
			<View style={{ alignItems: 'center' }}>
				<FlatList
					data={TASKS}
					renderItem={({ item }) => (
						<View style={styles.itemContainer}>
							<TaskItem title={item.title} admin={true} />
						</View>
					)}
					keyExtractor={(item) => item.id}
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
});

export default TasksOverviewScreen;
