import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';

const MoodGraph = (props) => {
	const storedMoods = useSelector((state) => state.moods.moods);
	const moodsLength = storedMoods.length;

	const lastFiveMoodValues = () => {
		switch (moodsLength) {
			case 0:
				return [0, 0, 0, 0, 0];
			case 1:
				return [0, 0, 0, 0, storedMoods[moodsLength - 1].value];
			case 2:
				return [
					0,
					0,
					0,
					storedMoods[moodsLength - 2].value,
					storedMoods[moodsLength - 1].value,
				];
			case 3:
				return [
					0,
					0,
					storedMoods[moodsLength - 3].value,
					storedMoods[moodsLength - 2].value,
					storedMoods[moodsLength - 1].value,
				];
			case 4:
				return [
					0,
					storedMoods[moodsLength - 4].value,
					storedMoods[moodsLength - 3].value,
					storedMoods[moodsLength - 2].value,
					storedMoods[moodsLength - 1].value,
				];
			default:
				return [
					storedMoods[moodsLength - 5].value,
					storedMoods[moodsLength - 4].value,
					storedMoods[moodsLength - 3].value,
					storedMoods[moodsLength - 2].value,
					storedMoods[moodsLength - 1].value,
				];
		}
	};

	const lastFiveMoodTimes = () => {
		switch (moodsLength) {
			case 0:
				return [0, 0, 0, 0, 0];
			case 1:
				return [0, 0, 0, 0, storedMoods[moodsLength - 1].time];
			case 2:
				return [
					0,
					0,
					0,
					storedMoods[moodsLength - 2].time,
					storedMoods[moodsLength - 1].time,
				];
			case 3:
				return [
					0,
					0,
					storedMoods[moodsLength - 3].time,
					storedMoods[moodsLength - 2].time,
					storedMoods[moodsLength - 1].time,
				];
			case 4:
				return [
					0,
					storedMoods[moodsLength - 4].time,
					storedMoods[moodsLength - 3].time,
					storedMoods[moodsLength - 2].time,
					storedMoods[moodsLength - 1].time,
				];
			default:
				return [
					storedMoods[moodsLength - 5].time,
					storedMoods[moodsLength - 4].time,
					storedMoods[moodsLength - 3].time,
					storedMoods[moodsLength - 2].time,
					storedMoods[moodsLength - 1].time,
				];
		}
	};

	return (
		<LineChart
			data={{
				labels: lastFiveMoodTimes(),
				datasets: [
					{
						data: lastFiveMoodValues(),
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
			style={styles.graph}
		/>
	);
};

const styles = StyleSheet.create({
	graph: {
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
	},
});

export default MoodGraph;
