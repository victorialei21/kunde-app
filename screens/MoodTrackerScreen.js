import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import MoodButton from '../components/MoodButton';
import DefaultText from '../components/DefaultText';
import DefaultButton from '../components/DefaultButton';
import Colors from '../constants/Colors';

const MoodTrackerScreen = (props) => {
	const [mood, setMood] = useState(0);

	const moodSubmitAlert = () => {
		const currentTime = new Date();
		const hours = currentTime.getHours();

		function minutesWithZeroes(currentTime) {
			return (
				(currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes()
			);
		}

		if (mood !== 0) {
			setMood(0);
			return Alert.alert(
				'Success!',
				'You submitted your mood of ' +
					mood +
					' at ' +
					hours +
					':' +
					minutesWithZeroes(currentTime)
			);
		} else {
			return Alert.alert(
				'Error!',
				'Please select a mood before pressing submit'
			);
		}
	};

	const moodHandler = (value) => {
		setMood(value);
	};

	const line = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June'],
		datasets: [
			{
				data: [20, 45, 28, 80, 99, 43],
				strokeWidth: 2, // optional
			},
		],
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
						onPress={mood === 0 ? () => moodHandler(1) : () => moodHandler(0)}
						style={{
							backgroundColor: mood === 1 ? Colors.yellow : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-sad'
						onPress={mood === 0 ? () => moodHandler(2) : () => moodHandler(0)}
						style={{
							backgroundColor: mood === 2 ? Colors.yellow : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-neutral'
						onPress={mood === 0 ? () => moodHandler(3) : () => moodHandler(0)}
						style={{
							backgroundColor: mood === 3 ? Colors.yellow : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-happy'
						onPress={mood === 0 ? () => moodHandler(4) : () => moodHandler(0)}
						style={{
							backgroundColor: mood === 4 ? Colors.yellow : Colors.background,
						}}
					/>
					<MoodButton
						name='tag-faces'
						onPress={mood === 0 ? () => moodHandler(5) : () => moodHandler(0)}
						style={{
							backgroundColor: mood === 5 ? Colors.yellow : Colors.background,
						}}
					/>
				</View>
				<View style={styles.scaleContainer}>
					<DefaultText style={styles.scaleText}>1</DefaultText>
					<DefaultText style={styles.scaleText}>2</DefaultText>
					<DefaultText style={styles.scaleText}>3</DefaultText>
					<DefaultText style={styles.scaleText}>4</DefaultText>
					<DefaultText style={styles.scaleText}>5</DefaultText>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<DefaultButton title={'Submit Mood'} onPress={moodSubmitAlert} />
			</View>
			<View>
				<Text style={styles.title}>Mood Summary—Five Past Entries</Text>
			</View>
			<View>
				<LineChart
					data={{
						labels: ['Time 1', 'Time 2', 'Time 3', 'Time 4', 'Time 5'],
						datasets: [
							{
								data: [
									Math.ceil(Math.random() * 5),
									Math.ceil(Math.random() * 5),
									Math.ceil(Math.random() * 5),
									Math.ceil(Math.random() * 5),
									Math.ceil(Math.random() * 5),
								],
								strokeWidth: 2,
							},
						],
					}}
					width={Dimensions.get('window').width * 0.8}
					height={200}
					chartConfig={{
						backgroundColor: '#1cc910',
						backgroundGradientFrom: '#eff3ff',
						backgroundGradientTo: '#efefef',
						decimalPlaces: 0,
						color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
						style: {
							borderRadius: 10,
						},
					}}
					yLabelsOffset={18}
					bezier
					style={{
						marginVertical: 8,
						borderRadius: 10,
						borderWidth: 2,
					}}
				/>
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
	buttonsContainer: {
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'center',
	},
	scaleContainer: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		width: '85%',
		justifyContent: 'space-between',
	},
	scaleText: {
		fontSize: 30,
	},
	buttonContainer: { marginTop: 10, marginBottom: 15 },
	buttonsScaleContainer: {
		flexDirection: 'column',
		borderWidth: 2,
		margin: 10,
		paddingBottom: 15,
		borderRadius: 10,
		width: Dimensions.get('window').width * 0.85,
		alignItems: 'center',
	},
	chartContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	titleContainer: {
		marginTop: 20,
	},
});

export default MoodTrackerScreen;
