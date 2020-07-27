import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const UserDetailTaskCard = (props) => {
	return (
		<TouchableOpacity
			style={{ ...styles.cardContainer, ...props.style }}
			onPress={props.onPress}
		>
			<View>
				<Text style={{ fontFamily: 'rubik-medium', fontSize: 17 }}>Tasks</Text>
			</View>
			<View style={{ padding: 10 }}>
				<DefaultText style={{ textAlign: 'center' }}>
					Completed 2 tasks and has 3 tasks remaining today
				</DefaultText>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		padding: 15,
		margin: 5,
		width: '95%',
		alignItems: 'center',
		backgroundColor: Colors.red,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3,
		elevation: 5,
		borderRadius: 10,
	},
});

export default UserDetailTaskCard;
