import React from 'react';
import { View, Dimensions, StyleSheet, FlatList, Text } from 'react-native';

import InformationRect from '../../components/InformationRect';
import UserCard from '../../components/UserCard';
import Colors from '../../constants/Colors';
import { USERS } from '../../data/dummy-data';
import DefaultText from '../../components/DefaultText';

const UserOverviewScreen = (props) => {
	return (
		<View style={styles.screen}>
			<View style={styles.headerContainer}>
				<Text style={styles.header}>Patient Feed</Text>
			</View>
			<View style={styles.listContainer}>
				<FlatList
					data={USERS}
					renderItem={({ item }) => (
						<View style={styles.itemContainer}>
							<UserCard name={item.name} />
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
	header: {
		fontFamily: 'rubik-medium',
		fontSize: 25,
	},
	headerContainer: {
		flex: 1,
		marginTop: 10,
		justifyContent: 'center',
	},
	listContainer: {
		flex: 8,
		width: '100%',
		padding: 10,
	},
	rectContainer: {
		paddingVertical: 5,
		width: '100%',
		alignItems: 'center',
		shadowRadius: 0,
	},
});

export default UserOverviewScreen;
