import React from 'react';
import { View, StyleSheet, Image, Alert, Text } from 'react-native';

import Colors from '../../constants/Colors';
import SettingItem from '../../components/SettingItem';

const SettingsScreen = (props) => {
	const logout = () => {
		Alert.alert('Logging Out', 'Are you sure you want to log out?', [
			{ text: 'Yes' },
			{ text: 'Cancel', style: 'cancel' },
		]);
	};

	return (
		<View style={styles.screen}>
			<View style={styles.profPicContainer}>
				<Image
					style={styles.profilePicture}
					source={require('../../assets/dummyprofilepic.png')}
				/>
			</View>
			<View>
				<Text style={{ fontSize: 15, fontFamily: 'rubik-medium' }}>
					First Name Last Name
				</Text>
			</View>
			<View style={styles.container}>
				<SettingItem
					title='Profile'
					onPress={() => props.navigation.navigate('Profile')}
				/>
				<SettingItem
					title='Track Data'
					onPress={() => props.navigation.navigate('Track Data')}
				/>
				<SettingItem title='Notification Settings' />
				<SettingItem
					title='Supervisor Details'
					onPress={() => props.navigation.navigate('Supervisor')}
				/>
				<SettingItem
					title='App Information'
					onPress={() => props.navigation.navigate('App Info')}
				/>
				<SettingItem title='Logout' onPress={logout} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.background,
	},
	container: {
		width: '100%',
		alignItems: 'center',
	},
	profPicContainer: {
		marginVertical: 20,
		borderWidth: 1,
		borderRadius: 50,
		overflow: 'hidden',
	},
	profilePicture: {
		width: 100,
		height: 100,
	},
});

export default SettingsScreen;
