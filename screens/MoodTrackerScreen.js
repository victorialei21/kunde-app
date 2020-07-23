import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useSelector, useDispatch } from 'react-redux';

import MoodButton from '../components/MoodButton';
import DefaultText from '../components/DefaultText';
import DefaultButton from '../components/DefaultButton';
import Colors from '../constants/Colors';
import { addMood } from '../store/actions/moods';
import { set } from 'react-native-reanimated';

const MoodTrackerScreen = (props) => {
	//global state
	const storedMoods = useSelector((state) => state.moods);
	const dispatch = useDispatch();

	const addAMood = useCallback(
		(mood, time) => {
			addMood(mood, time);
			setMood(mood);
			//console.log(mood);
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
	const moodSubmitAlert = () => {
		if (mood !== 0) {
			setMood(0);
			return Alert.alert(
				'Success!',
				'You submitted your mood of ' + mood + ' at ' + timeText()
			);
		} else {
			return Alert.alert(
				'Error!',
				'Please select a mood before pressing submit'
			);
		}
	};

	//reset screen
	const setMoodToZero = () => {
		setMood(0);
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
						onPress={
							mood !== 1 ? () => addAMood(1, timeText()) : () => setMoodToZero()
						}
						style={{
							padding: 2,
							backgroundColor:
								mood === 1 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-sad'
						onPress={
							mood !== 2 ? () => addAMood(2, timeText()) : () => setMoodToZero()
						}
						style={{
							padding: 2,
							backgroundColor:
								mood === 2 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-neutral'
						onPress={
							mood !== 3 ? () => addAMood(3, timeText()) : () => setMoodToZero()
						}
						style={{
							padding: 2,
							backgroundColor:
								mood === 3 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-happy'
						onPress={
							mood !== 4 ? () => addAMood(4, timeText()) : () => setMoodToZero()
						}
						style={{
							padding: 2,
							backgroundColor:
								mood === 4 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='tag-faces'
						onPress={
							mood !== 5 ? () => addAMood(5, timeText()) : () => setMoodToZero()
						}
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
				<DefaultButton title={'Submit Mood'} onPress={moodSubmitAlert} />
			</View>
			<View style={styles.chartContainer}>
				<View>
					<Text style={styles.title}>Mood Summary—Five Past Entries</Text>
				</View>
				<View>
					<LineChart
						data={{
							labels: ['Time 1', 'Time 2', 'Time 3', 'Time 4', 'Time 5'],
							datasets: [
								{
									data: [1, 2, 3, 4, 5],
									strokeWidth: 2,
								},
							],
						}}
						width={Dimensions.get('window').width * 0.85}
						height={200}
						chartConfig={{
							backgroundGradientFrom: Colors.white,
							backgroundGradientTo: Colors.white,
							decimalPlaces: 0,
							color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
						}}
						yLabelsOffset={18}
						bezier
						style={{
							marginVertical: 10,
							borderRadius: 10,
							overflow: 'hidden',
							shadowColor: '#000',
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.25,
							shadowRadius: 3,
							elevation: 5,
						}}
					/>
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
