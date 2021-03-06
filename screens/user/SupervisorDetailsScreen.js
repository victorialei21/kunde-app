import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/Colors';

const SupervisorDetailsScreen = (props) => {
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

export default SupervisorDetailsScreen;
