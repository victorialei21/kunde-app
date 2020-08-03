import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/Colors';
import DefaultHeaderText from '../../components/DefaultHeaderText';

const EditPillScreen = ({ route }) => {
	const { pillName } = route.params;
	return (
		<View style={styles.screen}>
			<View>
				<DefaultHeaderText>{pillName}</DefaultHeaderText>
			</View>
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

export default EditPillScreen;
