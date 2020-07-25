import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import InformationRect from '../../components/InformationRect';
import InformationBox from '../../components/InformationBox';
import { AFFIRMATIONS, TASKS, PILLS } from '../../data/dummy-data';
import Colors from '../../constants/Colors';

const MainScreen = (props) => {
	const randomInt = Math.floor(Math.random() * 18);
	const moods = useSelector((state) => state.moods.moods);
	const size = moods.length;

	const calculateMoodAverage = () => {
		if (size < 5) {
			const lastFiveMoodsSum =
				moods[size - 1].value +
				moods[size - 2].value +
				moods[size - 3].value +
				moods[size - 4].value +
				moods[size - 5].value;
			const moodAverage = lastFiveMoodsSum / 5;
			return `Your last five mood submissions have averaged at ${moodAverage}`;
		} else {
			return 'Please submit at least 5 moods to display a calculated average.';
		}
	};

	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Wellness Feed</Text>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						header='Affirmation of the Day'
						content={AFFIRMATIONS[randomInt]}
						affirmation={true}
					/>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						header="Today's Overview"
						content={`You have ${PILLS.length} pills to take today.`}
						style={{ backgroundColor: Colors.blue }}
					/>
				</View>
				<View style={styles.boxContainer}>
					<InformationBox
						header='Next Pill'
						content={`${PILLS[0].title}, ${PILLS[0].time}`}
						onSelect={() => {
							props.navigation.navigate('Pills');
						}}
					/>
					<InformationBox
						header='Mood Tracker'
						content='How are you feeling right now? Click to rate your mood!'
						onSelect={() => {
							props.navigation.navigate('Mood');
						}}
					/>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						goals={true}
						header='Upcoming Task'
						content={TASKS[0].title}
						onSelect={() => {
							props.navigation.navigate('Tasks');
						}}
					/>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						kunde={true}
						header='Learn More about Kunde Social Cafe!'
						style={{ backgroundColor: Colors.blue }}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.background,
	},
	title: {
		fontSize: 30,
		fontFamily: 'rubik-medium',
	},
	titleContainer: {
		paddingHorizontal: 10,
		paddingTop: 20,
	},
	rectContainer: {
		paddingVertical: 5,
		width: '100%',
		alignItems: 'center',
		shadowRadius: 0,
	},
	boxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default MainScreen;
