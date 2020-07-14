import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import DefaultText from './DefaultText';

const PillItem = (props) => {
	return (
		<View style={styles.pillBox}>
			<View style={styles.pillItem}>
				<DefaultText style={{ fontFamily: 'rubik-medium' }}>
					{props.title} {`(${props.quantity})`}
				</DefaultText>
				<DefaultText>{props.time}</DefaultText>
			</View>
			<CheckBox />
		</View>
	);
};

const styles = StyleSheet.create({
	pillBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: Dimensions.get('screen').width * 0.85,
		margin: 10,
		padding: 10,
	},
	pillItem: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	checkbox: {},
});

export default PillItem;
