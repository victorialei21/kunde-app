import React, { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';

import Colors from '../../constants/Colors';
import DefaultText from '../../components/DefaultText';

const TrackDataScreen = (props) => {
	const [trackingData, setTrackingData] = useState(false);
	const toggleSwitch = () => setTrackingData((previousState) => !previousState);

	return (
		<View style={styles.screen}>
			<View style={{ alignItems: 'center' }}>
				<View style={{ width: '85%' }}>
					<DefaultText style={{ textAlign: 'center' }}>
						Would you like to disable tracking data and use this app for more
						casual purposes? Insert disclaimers etc. about data tracking
					</DefaultText>
				</View>
				<View style={{ margin: 20 }}>
					<Switch
						value={trackingData}
						onValueChange={toggleSwitch}
						thumbColor={Colors.red}
					/>
				</View>
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

export default TrackDataScreen;
