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
								onPress={() => props.navigation.navigate('Edit Pill')}
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

	title: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
	},
	titleContainer: {
		paddingTop: 15,
		margin: 10,
		flex: 1,
		justifyContent: 'center',
	},
	listContainer: {
		flex: 12,
		width: '95%',
	},
	pillContainer: {
		alignItems: 'center',
	},
});

export default PillReminderScreen;
