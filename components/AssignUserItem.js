import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const AssignUserItem = (props) => {
	const [toggleCheckBox, setToggleCheckBox] = useState(false);

	const onComplete = () => {
		toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true);
	};
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
					onPress={onComplete}
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
		justifyContent: 'space-between',
		width: '90%',
		alignSelf: 'center',
	},
});

export default AssignUserItem;
