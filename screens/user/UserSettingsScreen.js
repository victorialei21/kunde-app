import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';

import Colors from '../../constants/Colors';
import SettingItem from '../../components/SettingItem';
import DefaultHeaderText from '../../components/DefaultHeaderText';

const UserSettingsScreen = (props) => {
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
				<DefaultHeaderText style={{ fontSize: 15 }}>
					Firstname Lastname
				</DefaultHeaderText>
			</View>
			<View style={styles.container}>
				<SettingItem
					title='Profile'
					onPress={() => props.navigation.navigate('Profile')}
				/>
				<SettingItem
					title='Customize Functions'
					onPress={() => props.navigation.navigate('Customize Functions')}
				/>
				<SettingItem title='Notification Settings' />
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

export default UserSettingsScreen;
