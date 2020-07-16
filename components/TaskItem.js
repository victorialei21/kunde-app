import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const TaskItem = (props) => {
	const [toggleCheckBox, setToggleCheckBox] = useState(false);

	if (props.completed === true) {
		return (
			<View style={{ ...styles.completedItem, ...props.style }}>
				<View>
					<DefaultText
						style={{
							fontSize: 15,
							padding: 15,
							textDecorationLine: 'line-through',
						}}
					>
						{props.title}
					</DefaultText>
				</View>
			</View>
		);
	}

	return (
		<View style={{ ...styles.item, ...props.style }}>
			<View style={{ flex: 8 }}>
				<DefaultText style={{ fontSize: 15 }}>{props.title}</DefaultText>
			</View>
			<View
				style={{
					flex: 1,
				}}
			>
				<CheckBox
					checked={toggleCheckBox}
					onPress={() =>
						toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)
					}
					checkedIcon='check-square'
					checkedColor='black'
					uncheckedColor='black'
					center
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		justifyContent: 'space-between',
		width: '90%',
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderRadius: 10,
		margin: 10,
		backgroundColor: Colors.yellow,
	},
	completedItem: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		justifyContent: 'space-between',
		width: '90%',
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderRadius: 10,
		margin: 10,
		backgroundColor: Colors.red,
	},
});

export default TaskItem;
