import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import TasksScreen from '../screens/user/TasksScreen';
import MainScreen from '../screens/user/MainScreen';
import MoodTrackerScreen from '../screens/user/MoodTrackerScreen';
import PillReminderScreen from '../screens/user/PillReminderScreen';
import UserSettingsScreen from '../screens/user/UserSettingsScreen';
import PastTasksScreen from '../screens/user/PastTasksScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import DisableSupervisorScreen from '../screens/user/DisableSupervisorScreen';
import SupervisorDetailsScreen from '../screens/user/SupervisorDetailsScreen';
import AppInfoScreen from '../screens/AppInfoScreen';
import PillDetailsScreen from '../screens/user/PillDetailsScreen';
import Colors from '../constants/Colors';

const UserHomeStack = createStackNavigator();

function UserHomeStackScreen() {
	return (
		<UserHomeStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<UserHomeStack.Screen name='Home' component={MainScreen} />
		</UserHomeStack.Navigator>
	);
}

const UserPillStack = createStackNavigator();

function UserPillStackScreen() {
	return (
		<UserPillStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<UserPillStack.Screen name='Pills' component={PillReminderScreen} />
			<UserPillStack.Screen name='Pill Details' component={PillDetailsScreen} />
		</UserPillStack.Navigator>
	);
}

const UserMoodStack = createStackNavigator();

function UserMoodStackScreen() {
	return (
		<UserMoodStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<UserMoodStack.Screen name='Mood' component={MoodTrackerScreen} />
		</UserMoodStack.Navigator>
	);
}

const UserTasksStack = createStackNavigator();

function UserTasksStackScreen() {
	return (
		<UserTasksStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<UserTasksStack.Screen name='Tasks' component={TasksScreen} />
			<UserTasksStack.Screen
				name='Completed Tasks'
				component={PastTasksScreen}
			/>
		</UserTasksStack.Navigator>
	);
}

const UserSettingsStack = createStackNavigator();

function UserSettingsStackScreen() {
	return (
		<UserSettingsStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<UserSettingsStack.Screen
				name='Settings'
				component={UserSettingsScreen}
			/>
			<UserSettingsStack.Screen name='Profile' component={ProfileScreen} />
			<UserSettingsStack.Screen
				name='Track Data'
				component={DisableSupervisorScreen}
			/>
			<UserSettingsStack.Screen
				name='Supervisor Details'
				component={SupervisorDetailsScreen}
			/>
			<UserSettingsStack.Screen
				name='App Information'
				component={AppInfoScreen}
			/>
		</UserSettingsStack.Navigator>
	);
}

const UserTab = createMaterialBottomTabNavigator();

function UserTabNavigator() {
	return (
		<NavigationContainer independent={true}>
			<UserTab.Navigator
				shifting={true}
				activeColor={'black'}
				barStyle={{ backgroundColor: Colors.background }}
			>
				<UserTab.Screen
					name='Home'
					component={UserHomeStackScreen}
					options={{
						tabBarLabel: <Text>Home</Text>,
						tabBarIcon: (tabInfo) => (
							<MaterialCommunityIcons
								name='home-outline'
								color={'black'}
								size={25}
							/>
						),
					}}
				/>
				<UserTab.Screen
					name='Pills'
					component={UserPillStackScreen}
					options={{
						tabBarLabel: <Text>Pill</Text>,
						tabBarIcon: (tabInfo) => (
							<MaterialCommunityIcons name='pill' color={'black'} size={25} />
						),
					}}
				/>
				<UserTab.Screen
					name='Mood'
					component={UserMoodStackScreen}
					options={{
						tabBarLabel: 'Mood',
						tabBarIcon: (tabInfo) => (
							<MaterialCommunityIcons
								name='emoticon-happy-outline'
								color={'black'}
								size={25}
							/>
						),
					}}
				/>
				<UserTab.Screen
					name='Tasks'
					component={UserTasksStackScreen}
					options={{
						tabBarLabel: 'Tasks',
						tabBarIcon: (tabInfo) => (
							<MaterialCommunityIcons
								name='check-bold'
								color={'black'}
								size={25}
							/>
						),
					}}
				/>

				<UserTab.Screen
					name='Settings'
					component={UserSettingsStackScreen}
					options={{
						tabBarLabel: 'Settings',
						tabBarIcon: (tabInfo) => (
							<MaterialCommunityIcons
								name='settings-outline'
								color={'black'}
								size={25}
							/>
						),
					}}
				/>
			</UserTab.Navigator>
		</NavigationContainer>
	);
}

export default UserTabNavigator;
