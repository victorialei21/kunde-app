import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

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
			<View style={styles.logContainer}>
				<DefaultHeaderText>Submitted Moods Log</DefaultHeaderText>
				<FlatList />
				{/* ^will be updated with firebase, empty for now */}
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
	graphContainer: {
		alignItems: 'center',
		flex: 1,
		marginTop: 20,
	},
	logContainer: {
		margin: 10,
		flex: 1,
	},
});

export default MoodOverviewScreen;
