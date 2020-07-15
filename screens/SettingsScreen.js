import React from 'react';
import { View, StyleSheet, Switch, Image } from 'react-native';

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import SettingItem from '../components/SettingItem';

const SettingsScreen = (props) => {
	return (
		<View style={styles.screen}>
			<View style={styles.profPicContainer}>
				<Image
					style={styles.profilePicture}
					source={{
						uri:
							//placeholder image
							'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
					}}
				/>
			</View>
			<View>
				<DefaultText style={{ fontSize: 15 }}>First Name</DefaultText>
			</View>
			<View style={styles.container}>
				<SettingItem title='Profile' />
				<SettingItem title='Track Data' />
				<SettingItem title='Notification Settings' />
				<SettingItem title='Supervisor Details' />
				<SettingItem title='App Information' />
				<SettingItem title='Logout' />
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
