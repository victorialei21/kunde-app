import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../../constants/Colors';
import MoodGraph from '../../components/MoodGraph';
import DefaultHeaderText from '../../components/DefaultHeaderText';

const MoodOverviewScreen = ({ route }) => {
	return (
		<View style={styles.screen}>
			<View style={styles.graphContainer}>
				<DefaultHeaderText> Last Five Moods Summary Graph</DefaultHeaderText>
				<MoodGraph />
			</View>
			<View></View>
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
	graphContainer: {
		alignItems: 'center',
	},
});

export default MoodOverviewScreen;
