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
						onPress={mood !== 1 ? () => moodHandler(1) : () => moodHandler(0)}
						style={{
							backgroundColor:
								mood === 1 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-sad'
						onPress={mood !== 2 ? () => moodHandler(2) : () => moodHandler(0)}
						style={{
							backgroundColor:
								mood === 2 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-neutral'
						onPress={mood !== 3 ? () => moodHandler(3) : () => moodHandler(0)}
						style={{
							backgroundColor:
								mood === 3 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='emoji-happy'
						onPress={mood !== 4 ? () => moodHandler(4) : () => moodHandler(0)}
						style={{
							backgroundColor:
								mood === 4 ? Colors.highlight : Colors.background,
						}}
					/>
					<MoodButton
						name='tag-faces'
						onPress={mood !== 5 ? () => moodHandler(5) : () => moodHandler(0)}
						style={{
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
						marginVertical: 8,
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
		padding: 10,
		justifyContent: 'center',
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
	submitButtonContainer: { marginTop: 10, marginBottom: 15 },
	buttonsScaleContainer: {
		flexDirection: 'column',
		flex: 2,
		margin: 10,
		paddingBottom: 15,
		borderRadius: 10,
		borderWidth: 1,
		width: Dimensions.get('window').width * 0.85,
		alignItems: 'center',
		// shadowColor: '#000',
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 3,
		// elevation: 5,
	},
	chartContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		flex: 4,
	},
});

export default MoodTrackerScreen;
