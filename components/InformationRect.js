import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultText from './DefaultText';

const InformationRect = (props) => {
	if (props.journal === true) {
		return (
			<TouchableOpacity style={styles.infoItem} onPress={props.onSelect}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>{props.header}</Text>
				</View>
				<View style={{ alignSelf: 'center' }}>
					<DefaultText>Today's Prompt: {props.content}</DefaultText>
				</View>
			</TouchableOpacity>
		);
	} else {
		return (
			<View style={styles.infoItem}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>{props.header}</Text>
				</View>
				<View style={{ alignSelf: 'center' }}>
					<DefaultText>"{props.content}"</DefaultText>
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	infoItem: {
		borderWidth: 2,
		padding: 10,
		margin: 5,
		borderRadius: 10,
		backgroundColor: '#24d6d2',
		//backgroundColor: '#9BA1DC',
	},
	header: {
		fontFamily: 'rubik-medium',
		fontSize: 18,
	},
	headerContainer: {
		alignItems: 'center',
		padding: 5,
	},
});

export default InformationRect;
