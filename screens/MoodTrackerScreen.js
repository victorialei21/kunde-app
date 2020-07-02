import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import MoodButton from '../components/MoodButton';
import DefaultText from '../components/DefaultText';
import DefaultButton from '../components/DefaultButton';

const MoodTrackerScreen = (props) => {
	const [mood, setMood] = useState('');

	const moodSubmitAlert = () => {
		const currentTime = new Date();
		const hours = currentTime.getHours();
		const minutes = currentTime.getMinutes();
		return Alert.alert(
			'Success',
			'You submitted your mood at: ' + hours + ':' + minutes
		);
	};

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>How Do You Feel Right Now?</Text>
			<View style={styles.buttonsScaleContainer}>
				<View style={styles.buttonsContainer}>
					<MoodButton name='emoticon-angry-outline' value={1} />
					<MoodButton name='emoji-sad' value={2} />
					<MoodButton name='emoji-neutral' value={3} />
					<MoodButton name='emoji-happy' value={4} />
					<MoodButton name='tag-faces' value={5} />
				</View>
				<View style={styles.scaleContainer}>
					<DefaultText style={styles.scaleText}>
						1{'        '}2{'       '}3{'        '}4{'       '}5
					</DefaultText>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<DefaultButton title={'Submit Mood'} onPress={moodSubmitAlert} />
			</View>
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
		fontSize: 20,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		marginTop: 10,
	},
	scaleContainer: {
		alignItems: 'center',
	},
	scaleText: {
		fontSize: 30,
	},
	buttonContainer: { margin: 10 },
	buttonsScaleContainer: {
		borderWidth: 2,
		margin: 20,
		paddingBottom: 15,
		borderRadius: 10,
	},
});

export default MoodTrackerScreen;
