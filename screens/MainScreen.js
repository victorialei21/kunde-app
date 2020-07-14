import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import InformationRect from '../components/InformationRect';
import InformationBox from '../components/InformationBox';
import { AFFIRMATIONS, PROMPTS } from '../data/dummy-data';
import DateText from '../components/DateText';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const MainScreen = (props) => {
	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Wellness Feed</Text>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						header={'Affirmation of the Day'}
						content={AFFIRMATIONS[0]}
						affirmation={true}
					/>
					<InformationRect
						header={"Today's Information"}
						content={<DateText style={{ fontSize: 15 }} />}
					/>
				</View>
				<View style={styles.pillMoodContainer}>
					<InformationBox
						header={'Pill Reminders'}
						content={'Need to take:'}
						onSelect={() => {
							props.navigation.navigate('Pills');
						}}
					/>
					<InformationBox
						header={'Mood Tracker'}
						content={'How are you feeling right now? Click to rate your mood!'}
						onSelect={() => {
							props.navigation.navigate('Mood');
						}}
					/>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						journal={true}
						header={"Today's Prompt"}
						content={<DefaultText>{PROMPTS[5]}</DefaultText>}
						onSelect={() => {
							props.navigation.navigate('Journal');
						}}
					/>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						kunde={true}
						header={'Learn More about Kunde Social Cafe!'}
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
		flexDirection: 'column',
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
		paddingHorizontal: 20,
		paddingVertical: 5,
		width: '98%',
		alignItems: 'center',
	},
	pillMoodContainer: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		alignItems: 'center',
	},
});

export default MainScreen;
