import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const PastJournalEntriesScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>Past Journal Screen</Text>
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

export default PastJournalEntriesScreen;
