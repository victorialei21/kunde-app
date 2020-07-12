import React from 'react';
import { View, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import DefaultText from './DefaultText';

const PillReminderBox = (props) => {
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
		width: '80%',
		margin: 10,
		borderWidth: 2,
		borderRadius: 10,
		padding: 15,
	},
	pillItem: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	checkbox: {},
});

export default PillReminderBox;
