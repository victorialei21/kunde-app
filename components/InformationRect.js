import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import DefaultText from './DefaultText';

const InformationRect = (props) => {
	if (props.journal === true) {
		return (
			<TouchableOpacity
				style={{ ...styles.infoItem, ...props.style }}
				onPress={props.onSelect}
			>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>{props.header}</Text>
				</View>
				<View style={{ alignSelf: 'center', margin: 5 }}>
					<DefaultText>Today's Prompt: {props.content}</DefaultText>
				</View>
			</TouchableOpacity>
		);
	}
	if (props.affirmation === true) {
		return (
			<View style={{ ...styles.infoItem, ...props.style }}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>{props.header}</Text>
				</View>
				<View style={{ alignSelf: 'center', margin: 5 }}>
					<DefaultText>"{props.content}"</DefaultText>
				</View>
			</View>
		);
	} else {
		return (
			<View style={{ ...styles.infoItem, ...props.style }}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>{props.header}</Text>
				</View>
				<View style={{ alignSelf: 'center', margin: 5 }}>
					<DefaultText>{props.content}</DefaultText>
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
		width: '95%',
		borderRadius: 10,
		backgroundColor: '#24d6d2',
		alignItems: 'center',
	},
	header: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
	},
	headerContainer: {
		alignItems: 'center',
		padding: 5,
	},
});

export default InformationRect;
