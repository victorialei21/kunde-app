import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import SettingItem from '../components/SettingItem';

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
					source={{
						uri:
							'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
					}}
				/>
			</View>
			<View>
				<DefaultText style={{ fontSize: 15 }}>First Name</DefaultText>
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
