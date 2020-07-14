import React from 'react';
import { StyleSheet, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const TaskItem = (props) => {
	return (
		<View style={{ ...styles.item, ...props.style }}>
			<View style={{ flex: 9 }}>
				<DefaultText style={{ fontSize: 15 }}>{props.title}</DefaultText>
			</View>
			<View style={{ flex: 1 }}>
				<CheckBox tintColors={{ true: 'black', false: 'black' }} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		justifyContent: 'space-between',
		width: '90%',
		padding: 15,
		borderRadius: 10,
		margin: 10,
		backgroundColor: Colors.yellow,
	},
});

export default TaskItem;
