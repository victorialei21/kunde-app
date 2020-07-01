import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JournalScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>Test</Text>
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
});

export default JournalScreen;
