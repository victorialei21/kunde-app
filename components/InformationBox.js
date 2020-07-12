import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import DefaultText from './DefaultText';

const InformationBox = (props) => {
	return (
		<TouchableOpacity
			style={{ ...styles.infoItem, ...props.style }}
			onPress={props.onSelect}
		>
			<View style={styles.headerContainer}>
				<Text style={styles.header}>{props.header}</Text>
			</View>
			<View style={styles.contentContainer}>
				<DefaultText>{props.content}</DefaultText>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	infoItem: {
		flex: 1,
		margin: 10,
		paddingVertical: 10,
		height: '85%',
		borderWidth: 2,
		borderRadius: 10,
		backgroundColor: '#FFB97C',
	},
	contentContainer: {
		paddingVertical: 5,
		marginBottom: 10,
		paddingHorizontal: 10,
		width: '90%',
		alignSelf: 'center',
	},
	header: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
		paddingTop: 5,
	},
	headerContainer: {
		alignItems: 'center',
		padding: 5,
	},
});

export default InformationBox;
