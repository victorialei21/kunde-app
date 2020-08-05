import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import BadgeItem from '../../components/BadgeItem';
import DefaultHeaderText from '../../components/DefaultHeaderText';

const BadgesScreen = (props) => {
	const taskProgOne = require('../../assets/TaskProgression1.png');
	const taskCumulativeOne = require('../../assets/TaskCumulative1.png');
	const moodProgOne = require('../../assets/MoodProgression1.png');
	const pillProgOne = require('../../assets/PillProgression1.png');
	const placeHolder = require('../../assets/Placeholder.png');

	return (
		<View style={styles.screen}>
			<ScrollView style={styles.scrollContainer}>
				<View style={styles.categorySection}>
					<View style={{ borderBottomWidth: 1 }}>
						<DefaultHeaderText>Pills</DefaultHeaderText>
					</View>
					<View style={styles.badgesContainer}>
						<BadgeItem description='5 in a row' source={pillProgOne} />
						<BadgeItem description='25 in a row' source={pillProgOne} />
						<BadgeItem description='50 in a row' source={placeHolder} />
						<BadgeItem description='100 in a row' source={placeHolder} />
						<BadgeItem description='365 in a row' source={placeHolder} />
					</View>
				</View>
				<View style={styles.categorySection}>
					<View style={{ borderBottomWidth: 1 }}>
						<DefaultHeaderText>Mood</DefaultHeaderText>
					</View>
					<View style={styles.badgesContainer}>
						<BadgeItem description='5 in a row' source={moodProgOne} />
						<BadgeItem description='25 in a row' source={placeHolder} />
						<BadgeItem description='50 in a row' source={placeHolder} />
						<BadgeItem description='100 in a row' source={placeHolder} />
						<BadgeItem description='365 in a row' source={placeHolder} />
					</View>
				</View>
				<View style={styles.categorySection}>
					<View style={{ borderBottomWidth: 1 }}>
						<DefaultHeaderText>Tasks</DefaultHeaderText>
					</View>
					<View style={styles.badgesContainer}>
						<BadgeItem description='5 in a row' source={taskProgOne} />
						<BadgeItem description='25 in a row' source={taskProgOne} />
						<BadgeItem description='50 in a row' source={taskProgOne} />
						<BadgeItem description='100 in a row' source={placeHolder} />
						<BadgeItem description='365 in a row' source={placeHolder} />
						<BadgeItem description='25 total' source={taskCumulativeOne} />
						<BadgeItem description='50 total' source={taskCumulativeOne} />
						<BadgeItem description='75 total' source={placeHolder} />
					</View>
				</View>
			</ScrollView>
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
	scrollContainer: {
		paddingVertical: 20,
	},
	categorySection: {
		margin: 10,
		width: Dimensions.get('screen').width * 0.9,
	},
	badgesContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});

export default BadgesScreen;
