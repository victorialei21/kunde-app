import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const PillItem = (props) => {
	const [toggleCheckBox, setToggleCheckBox] = useState(false);

	if (props.admin === true) {
		return (
			<TouchableOpacity style={styles.pillBox} onPress={props.onPress}>
				<View style={styles.pillItem}>
					<DefaultText style={{ fontFamily: 'rubik-medium' }}>
						{props.title} {`(${props.quantity})`}
					</DefaultText>
					<DefaultText>{props.time}</DefaultText>
				</View>
				<View style={{ flex: 1 }}>
					<CheckBox
						checked={toggleCheckBox}
						checkedIcon='check-square'
						checkedColor={Colors.red}
						uncheckedColor='black'
						center
					/>
				</View>
			</TouchableOpacity>
		);
	}
	return (
		<TouchableOpacity style={styles.pillBox} onPress={props.onPress}>
			<View style={styles.pillItem}>
				<DefaultText style={{ fontFamily: 'rubik-medium' }}>
					{props.title} {`(${props.quantity})`}
				</DefaultText>
				<DefaultText>{props.time}</DefaultText>
			</View>
			<View style={{ flex: 1 }}>
				<CheckBox
					checked={toggleCheckBox}
					onPress={() =>
						toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)
					}
					checkedIcon='check-square'
					checkedColor={Colors.red}
					uncheckedColor='black'
					center
				/>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	pillBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: Dimensions.get('screen').width * 0.85,
		margin: 5,
		padding: 10,
	},
	pillItem: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		flex: 7,
	},
});

export default PillItem;
