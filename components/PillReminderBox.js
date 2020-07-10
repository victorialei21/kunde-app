import React from 'react';
import { View, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import DefaultText from './DefaultText';

const PillReminderBox = (props) => {
	return (
		<View style={styles.pillBox}>
			<View style={styles.pillItem}>
				<DefaultText>{props.title}</DefaultText>
			</View>
			<CheckBox />
		</View>
	);
};

const styles = StyleSheet.create({
	pillBox: {
		borderWidth: 2,
		padding: 5,
		margin: 10,
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 200,
	},
	pillItem: {},
	checkbox: {},
});

export default PillReminderBox;
