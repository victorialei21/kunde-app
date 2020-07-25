import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Colors from '../../constants/Colors';
import TaskItem from '../../components/TaskItem';
import { TASKS } from '../../data/dummy-data';

const PastTasksScreen = (props) => {
	return (
		<View style={styles.screen}>
			<View style={styles.listContainer}>
				<FlatList
					style={{ width: '100%' }}
					data={TASKS}
					renderItem={({ item }) => (
						<View style={styles.itemContainer}>
							<TaskItem title={item.title} completed={true} />
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

export default PastTasksScreen;
