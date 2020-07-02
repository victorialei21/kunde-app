import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import MoodButton from '../components/MoodButton';
import DefaultText from '../components/DefaultText';
import DefaultButton from '../components/DefaultButton';

const MoodTrackerScreen = (props) => {
	const [mood, setMood] = useState('');

	const moodSubmitAlert = () => {
		const currentTime = new Date();
		const hours = currentTime.getHours();

		function minutesWithZeroes(currentTime) {
			return (
				(currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes()
			);
		}

		return Alert.alert(
			'Success',
			'You submitted your mood at ' +
				hours +
				':' +
				minutesWithZeroes(currentTime)
		);
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
					<MoodButton name='emoticon-angry-outline' value={1} />
					<MoodButton name='emoji-sad' value={2} />
					<MoodButton name='emoji-neutral' value={3} />
					<MoodButton name='emoji-happy' value={4} />
					<MoodButton name='tag-faces' value={5} />
				</View>
				<View style={styles.scaleContainer}>
					<DefaultText style={styles.scaleText}>
						{''}1{'      '}2{'      '}3{'      '}4{'      '}5
					</DefaultText>
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
		backgroundColor: '#fff9e9',
	},
	title: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
	},
	buttonsContainer: {
		flexDirection: 'row',
		padding: 10,
		paddingHorizontal: 10,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	scaleContainer: {
		alignItems: 'center',
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
