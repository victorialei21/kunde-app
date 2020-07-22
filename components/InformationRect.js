import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Linking,
} from 'react-native';

import DefaultText from './DefaultText';
import DefaultButton from './DefaultButton';
import Colors from '../constants/Colors';
import { TASKS } from '../data/dummy-data';

const InformationRect = (props) => {
	if (props.goals === true) {
		return (
			<TouchableOpacity
				style={{ ...styles.infoItem, ...props.style }}
				onPress={props.onSelect}
			>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>{props.header}</Text>
				</View>
				<View style={{ margin: 5 }}>
					<DefaultText style={{ textAlign: 'center' }}>
						{props.content}
					</DefaultText>
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
				<View style={{ margin: 5 }}>
					<DefaultText style={styles.text}>"{props.content}"</DefaultText>
				</View>
			</View>
		);
	}
	if (props.kunde === true) {
		return (
			<View style={{ ...styles.infoItem, ...props.style }}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>{props.header}</Text>
				</View>
				<View style={styles.linkContainer}>
					<DefaultButton
						style={styles.linkButton}
						title={'Instagram'}
						onPress={() =>
							Linking.openURL('https://www.instagram.com/kundecafe/')
						}
					/>
					<DefaultButton
						style={styles.linkButton}
						title={'Facebook'}
						onPress={() =>
							Linking.openURL('https://www.facebook.com/kundecafe')
						}
					/>
					<DefaultButton
						style={styles.linkButton}
						title={'WhatsApp'}
						onPress={() =>
							Linking.openURL('https://www.facebook.com/kundecafe')
						}
					/>
				</View>
			</View>
		);
	} else {
		return (
			<View style={{ ...styles.infoItem, ...props.style }}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>{props.header}</Text>
				</View>
				<View style={{ margin: 5 }}>
					<DefaultText style={{ textAlign: 'center' }}>
						{props.content}
					</DefaultText>
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	infoItem: {
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
	header: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
		textAlign: 'center',
	},
	headerContainer: {
		alignItems: 'center',
		padding: 5,
	},
	linkButton: {
		backgroundColor: Colors.red,
		width: '33%',
		padding: 5,
		margin: 5,
	},
	linkContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
});

export default InformationRect;
