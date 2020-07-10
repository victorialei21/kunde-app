import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import DefaultText from '../components/DefaultText';
import PillReminderBox from '../components/PillReminderBox';
import DateText from '../components/DateText';

const PillReminderScreen = (props) => {
	const goToAddNewPill = () => {
		props.navigation.navigate('Add Pill');
	};

	return (
		<View style={styles.screen}>
			<View style={styles.titleContainer}>
				<DateText />
			</View>
			<FlatList renderItem={(itemData) => <PillReminderBox />} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff9e9',
	},
	titleContainer: {
		width: '85%',
		paddingTop: 40,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	title: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
	},
});

export default PillReminderScreen;
