import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/Colors';

const PillDetailsScreen = (props) => {
	return <View style={styles.screen}></View>;
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.background,
	},
});

export default PillDetailsScreen;
