import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import DateText from '../components/DateText';
import { PILLS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import PillItem from '../components/PillItem';

const PillReminderScreen = (props) => {
	return (
		<View style={styles.screen}>
			<View style={styles.titleContainer}>
				<DateText />
			</View>
			<SafeAreaView style={styles.listContainer}>
				<FlatList
					style={{ width: '100%' }}
					data={PILLS}
					renderItem={({ item }) => (
						<View style={styles.pillContainer}>
							<PillItem
								title={item.title}
								time={item.time}
								quantity={item.quantity}
							/>
						</View>
					)}
					keyExtractor={(item) => item.id}
				/>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: Colors.background,
	},
	titleContainer: {
		paddingTop: 30,
		paddingBottom: 20,
	},
	title: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
	},
	listContainer: {
		flex: 1,
		flexDirection: 'column',
		width: '95%',
		alignItems: 'center',
	},
	pillContainer: {
		alignItems: 'center',
	},
});

export default PillReminderScreen;
