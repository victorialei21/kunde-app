import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../../constants/Colors';

const AddUserScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>Edit Pill</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.background,
	},
});

export default AddUserScreen;
