import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import DefaultText from './DefaultText';
import DefaultButton from './DefaultButton';
import Colors from '../constants/Colors';

const UserDetailPillCard = (props) => {
	return (
		<TouchableOpacity
			style={{ ...styles.cardContainer, ...props.style }}
			onPress={props.onPress}
		>
			<View style={styles.profPicContainer}>
				<Image
					style={styles.profilePicture}
					source={require('../assets/dummyprofilepic.png')}
				/>
			</View>
			<View style={styles.nameContainer}>
				<Text style={styles.name}>{props.name}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		flexDirection: 'row',
		padding: 10,
		margin: 5,
		width: '95%',
		alignItems: 'center',
		backgroundColor: Colors.yellow,
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
	name: {
		fontFamily: 'rubik-medium',
		fontSize: 15,
		textAlign: 'center',
	},
	nameContainer: {
		alignItems: 'center',
		padding: 5,
		marginHorizontal: 10,
	},
	profPicContainer: {
		marginVertical: 10,
		marginLeft: 20,
		marginRight: 10,
		borderWidth: 1,
		borderRadius: 50,
		overflow: 'hidden',
	},
	profilePicture: {
		width: 50,
		height: 50,
	},
});

export default UserDetailPillCard;
