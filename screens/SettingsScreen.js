import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

import DefaultText from '../components/DefaultText';

const SettingSwitch = (props) => {
	return (
		<View style={styles.switchContainer}>
			<DefaultText>{props.label}</DefaultText>
			<Switch
				trackColor={{ true: 'green' }}
				thumbColor='green'
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

const SettingsScreen = (props) => {
	return (
		<View style={styles.screen}>
			<SettingSwitch
				label='Track Data'
				//state={isGlutenFree}
				//onChange={(newValue) => setIsGlutenFree(newValue)}
			/>
			<SettingSwitch
				label='Logout'
				// state={isLactoseFree}
				// onChange={(newValue) => setIsLactoseFree(newValue)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#fff9e9',
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
		marginTop: 20,
		borderWidth: 1,
		borderRadius: 10,
		padding: 8,
	},
});

export default SettingsScreen;
