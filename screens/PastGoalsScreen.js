import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const PastGoalsScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>Past Goals Screen</Text>
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

export default PastGoalsScreen;
