import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DefaultText from '../components/DefaultText';

const SettingsScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Test</Text>
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
	title: {
		fontFamily: 'rubik-medium',
		fontSize: 25,
	},
});

export default SettingsScreen;
