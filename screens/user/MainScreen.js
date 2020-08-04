import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import InformationRect from '../../components/InformationRect';
import InformationBox from '../../components/InformationBox';
import { AFFIRMATIONS, TASKS, PILLS } from '../../data/dummy-data';
import Colors from '../../constants/Colors';

const MainScreen = (props) => {
	const randomInt = Math.floor(Math.random() * 18);

	const badges = () => {
		return <View></View>;
	};

	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.rectContainer}>
					<InformationRect
						header='Affirmation of the Day'
						content={`"${AFFIRMATIONS[randomInt]}"`}
						affirmation={true}
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
				<View>
					<InformationRect
						goals={true}
						header='Earn Badges'
						content={
							'Click to track your progress and work toward earning more badges!'
						}
						onSelect={() => {
							props.navigation.navigate('Badges');
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
		padding: 5,
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
