import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultText from './DefaultText';

const InformationBox = (props) => {
	return (
		<TouchableOpacity style={styles.infoItem} onPress={props.onSelect}>
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
		margin: 5,
		paddingVertical: 10,
		height: '90%',
		borderWidth: 2,
		borderRadius: 10,
		overflow: 'hidden',
		//backgroundColor: '41e7ec'
		backgroundColor: '#FFB97C',
		//elevation: 5,
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
		fontSize: 18,
		paddingTop: 5,
	},
	headerContainer: {
		alignItems: 'center',
		padding: 5,
	},
});

export default InformationBox;
