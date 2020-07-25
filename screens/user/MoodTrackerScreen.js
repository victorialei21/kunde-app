import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import MoodButton from '../../components/MoodButton';
import DefaultText from '../../components/DefaultText';
import DefaultButton from '../../components/DefaultButton';
import MoodGraph from '../../components/MoodGraph';
import Colors from '../../constants/Colors';
import { addMood } from '../../store/actions/moods';

const MoodTrackerScreen = (props) => {
	//global state
	const storedMoods = useSelector((state) => state.moods.moods);
	const dispatch = useDispatch();

	const addMoodHandler = useCallback(
		(value, time) => {
			dispatch(addMood(value, time));
			moodSubmitAlert(value, time);
		},
		[dispatch]
	);

	//local state
	const [mood, setMood] = useState(0);

	//properly formmated timee generator function
	function timeText() {
		const currentTime = new Date();
		const hours = currentTime.getHours();
		const minutesWithZeroes = (currentTime) => {
			return (
				(currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes()
			);
		};
		return `${hours}:${minutesWithZeroes(currentTime)}`;
	}

	//on press submit button
	const moodSubmitAlert = (mood, time) => {
		if (mood !== 0) {
			setMood(0);
			return Alert.alert(
				'Success!',
				'You submitted your mood of ' + mood + ' at ' + time
			);
		} else {
			return Alert.alert(
				'Error!',
				'Please select a mood before pressing submit'
			);
		}
	};

	//set mood in local state
	const moodSetter = (val) => {
		setMood(val);
	};

	return (
		<View style={styles.screen}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>How Do You Feel Right Now?</Text>
			</View>
			<View style={styles.buttonsScaleContainer}>
				<View style={styles.buttonsContainer}>
					<MoodButton
						name='emoticon-angry-outline'
						onPress={mood !== 1 ? () => moodSetter(1) : () => moodSetter(0)}
						style={{
							padding: 2,
							backgroundColor:
								mood === 1 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-sad'
						onPress={mood !== 2 ? () => moodSetter(2) : () => moodSetter(0)}
						style={{
							padding: 2,
							backgroundColor:
								mood === 2 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-neutral'
						onPress={mood !== 3 ? () => moodSetter(3) : () => moodSetter(0)}
						style={{
							padding: 2,
							backgroundColor:
								mood === 3 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-happy'
						onPress={mood !== 4 ? () => moodSetter(4) : () => moodSetter(0)}
						style={{
							padding: 2,
							backgroundColor:
								mood === 4 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='tag-faces'
						onPress={mood !== 5 ? () => moodSetter(5) : () => moodSetter(0)}
						style={{
							padding: 2,
							backgroundColor:
								mood === 5 ? Colors.highlight : Colors.background,
						}}
					/>
				</View>
				<View style={styles.scaleContainer}>
					<DefaultText style={{ fontSize: 30 }}>1</DefaultText>
					<DefaultText style={{ fontSize: 30 }}>2</DefaultText>
					<DefaultText style={{ fontSize: 30 }}>3</DefaultText>
					<DefaultText style={{ fontSize: 30 }}>4</DefaultText>
					<DefaultText style={{ fontSize: 30 }}>5</DefaultText>
				</View>
			</View>
			<View style={styles.submitButtonContainer}>
				<DefaultButton
					title={'Submit Mood'}
					onPress={() => addMoodHandler(mood, timeText())}
				/>
			</View>
			<View style={styles.chartContainer}>
				<View>
					<Text style={styles.title}>Mood Summary—Five Past Entries</Text>
				</View>
				<View>
					<MoodGraph />
				</View>
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
	title: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
	},
	titleContainer: {
		flex: 1,
		marginTop: 15,
		justifyContent: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
		padding: 15,
		alignItems: 'center',
	},
	scaleContainer: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		width: '85%',
		justifyContent: 'space-between',
		backgroundColor: Colors.red,
		borderRadius: 10,
		padding: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3,
		elevation: 5,
	},
	submitButtonContainer: {
		marginTop: 20,
		marginBottom: 10,
		flex: 1,
		justifyContent: 'center',
	},
	buttonsScaleContainer: {
		flexDirection: 'column',
		flex: 2,
		margin: 5,
		width: Dimensions.get('window').width * 0.85,
		alignItems: 'center',
		padding: 5,
	},
	chartContainer: {
		flex: 5,
	},
});

export default MoodTrackerScreen;
