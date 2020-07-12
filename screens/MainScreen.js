import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import InformationRect from '../components/InformationRect';
import InformationBox from '../components/InformationBox';
import { AFFIRMATIONS, PROMPTS } from '../data/dummy-data';
import DateText from '../components/DateText';

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
						content={
							'filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler'
						}
						onSelect={() => {
							props.navigation.navigate('Pills');
						}}
					/>
					<InformationBox
						header={'Mood Tracker'}
						content={
							'filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler'
						}
						onSelect={() => {
							props.navigation.navigate('Mood');
						}}
					/>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						journal={true}
						header={'Start Your Journal Entry'}
						content={PROMPTS[5]}
						onSelect={() => {
							props.navigation.navigate('Journal');
						}}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

// MainScreen.navigationOptions = (navData) => {return (
// 	headerLeft:
// )};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#fff9e9',
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
