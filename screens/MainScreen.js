import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import InformationRect from '../components/InformationRect';
import InformationBox from '../components/InformationBox';
import { AFFIRMATIONS } from '../data/dummy-data';

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
					/>
					<InformationRect
						header={"Today's Information"}
						content={
							'filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler'
						}
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
						touchable={true}
						header={'Start Your Journal Entry'}
						content={
							'filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler'
						}
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
		textAlign: 'center',
	},
	titleContainer: {
		alignContent: 'flex-start',
		paddingHorizontal: 10,
		paddingTop: 20,
	},
	rectContainer: {
		paddingHorizontal: 20,
		paddingVertical: 5,
	},
	pillMoodContainer: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		alignContent: 'center',
	},
});

export default MainScreen;
