import React, { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';

import Colors from '../../constants/Colors';
import DefaultHeaderText from '../../components/DefaultHeaderText';

const CustomizeFunctionsScreen = (props) => {
	const [trackingData, setTrackingData] = useState(true);
	const toggleDataSwitch = () =>
		setTrackingData((previousState) => !previousState);

	const [pillReminders, setPillReminders] = useState(true);
	const togglePillSwitch = () =>
		setPillReminders((previousState) => !previousState);

	const [supervisor, setSupervisor] = useState(true);
	const toggleSupervisorSwitch = () =>
		setSupervisor((previousState) => !previousState);

	return (
		<View style={styles.screen}>
			<View style={styles.switchItem}>
				<DefaultHeaderText>Toggle Data Tracking</DefaultHeaderText>
				<Switch
					value={trackingData}
					onValueChange={toggleDataSwitch}
					thumbColor={Colors.red}
				/>
			</View>
			<View style={styles.switchItem}>
				<DefaultHeaderText>Toggle Pill Reminders</DefaultHeaderText>
				<Switch
					value={pillReminders}
					onValueChange={togglePillSwitch}
					thumbColor={Colors.red}
				/>
			</View>
			<View style={styles.switchItem}>
				<DefaultHeaderText>Toggle Supervisor</DefaultHeaderText>
				<Switch
					value={supervisor}
					onValueChange={toggleSupervisorSwitch}
					thumbColor={Colors.red}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: 20,
		alignItems: 'center',
		backgroundColor: Colors.background,
	},
	switchItem: {
		flexDirection: 'row',
		margin: 10,
		borderBottomWidth: 1,
		padding: 10,
		width: '80%',
		justifyContent: 'space-between',
	},
});

export default CustomizeFunctionsScreen;
