import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import Colors from '../../constants/Colors';
import DefaultButton from '../../components/DefaultButton';
import UserDetailPillCard from '../../components/UserDetailPillCard';
import UserDetailMoodCard from '../../components/UserDetailMoodCard';
import UserDetailTaskCard from '../../components/UserDetailTaskCard';

const UserDetailScreen = ({ route, navigation }) => {
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
			<View style={styles.addButtonsContainer}>
				<DefaultButton
					title='Add Pill'
					onPress={() => navigation.navigate('Add Pill')}
					style={styles.button}
				/>
				<DefaultButton
					title='Add Task'
					onPress={() => navigation.navigate('Add Task')}
					style={styles.button}
				/>
			</View>
			<View style={styles.summariesContainer}>
				<UserDetailPillCard
					onPress={() => navigation.navigate('Pill Overview')}
				/>
				<UserDetailMoodCard
					onPress={() => navigation.navigate('Mood Overview')}
				/>
				<UserDetailTaskCard
					onPress={() => navigation.navigate('Tasks Overview')}
				/>
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
		width: '80%',
	},
	addButtonsContainer: {
		flexDirection: 'row',
		width: '90%',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},
	button: {
		marginHorizontal: 40,
		marginVertical: 10,
		paddingHorizontal: 10,
	},
	summariesContainer: { width: '90%' },
});

export default UserDetailScreen;
