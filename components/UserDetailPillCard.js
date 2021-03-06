import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const UserDetailPillCard = (props) => {
	return (
		<TouchableOpacity
			style={{ ...styles.cardContainer, ...props.style }}
			onPress={props.onPress}
		>
			<View>
				<Text style={{ fontFamily: 'rubik-medium', fontSize: 17 }}>Pills</Text>
			</View>
			<View style={{ padding: 10 }}>
				<DefaultText style={{ textAlign: 'center' }}>
					Took 3 pills and has 5 pills left today
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

export default UserDetailPillCard;
