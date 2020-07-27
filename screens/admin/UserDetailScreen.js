import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import Colors from '../../constants/Colors';

const UserDetailScreen = ({ route }) => {
	const { userName } = route.params;

	return (
		<View style={styles.screen}>
			<View style={styles.namePicContainer}>
				<View style={styles.profPicContainer}>
					<Image
						source={require('../../assets/dummyprofilepic.png')}
						style={styles.profPic}
					/>
				</View>
				<View style={styles.nameContainer}>
					<Text style={{ fontFamily: 'rubik-medium', fontSize: 18 }}>
						{userName}
					</Text>
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
	profPicContainer: {
		overflow: 'hidden',
		height: 70,
		width: 70,
		borderRadius: 35,
		borderWidth: 1,
	},
	profPic: {
		height: 70,
		width: 70,
	},
	nameContainer: {
		margin: 10,
		padding: 15,
	},
	namePicContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default UserDetailScreen;
