import React from 'react';
import { TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native';
import {
	MaterialIcons,
	Entypo,
	MaterialCommunityIcons,
} from '@expo/vector-icons';

const MoodButton = (props) => {
	if (props.name === 'tag-faces') {
		return (
			<TouchableOpacity
				style={{ ...styles.button, ...props.style }}
				onPress={props.onPress}
				updateColor={props.updateColor}
			>
				<View style={styles.textContainer}>
					<MaterialIcons name={props.name} size={43} />
				</View>
			</TouchableOpacity>
		);
	} else if (
		props.name === 'emoji-happy' ||
		props.name === 'emoji-neutral' ||
		props.name === 'emoji-sad'
	) {
		return (
			<TouchableOpacity
				style={{ ...styles.button, ...props.style }}
				onPress={props.onPress}
				updateColor={props.updateColor}
			>
				<View style={styles.textContainer}>
					<Entypo name={props.name} size={40} />
				</View>
			</TouchableOpacity>
		);
	} else {
		return (
			<TouchableOpacity
				style={{ ...styles.button, ...props.style }}
				onPress={props.onPress}
				updateColor={props.updateColor}
			>
				<View style={styles.textContainer}>
					<MaterialCommunityIcons name={props.name} size={43} />
				</View>
			</TouchableOpacity>
		);
	}
};

const styles = StyleSheet.create({
	button: {
		padding: 6,
		borderRadius: 35,
	},
	textContainer: {
		alignContent: 'center',
		padding: 5,
	},
});

export default MoodButton;
