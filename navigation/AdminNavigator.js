import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import TasksScreen from '../screens/user/TasksScreen';
import MainScreen from '../screens/user/MainScreen';
import MoodTrackerScreen from '../screens/user/MoodTrackerScreen';
import SettingsScreen from '../screens/user/SettingsScreen';
import AddNewPillScreen from '../screens/admin/AddNewPillScreen';
import Colors from '../constants/Colors';
import ProfileScreen from '../screens/user/ProfileScreen';
import TrackDataScreen from '../screens/user/TrackDataScreen';
import SupervisorDetailsScreen from '../screens/user/SupervisorDetailsScreen';
import AppInfoScreen from '../screens/AppInfoScreen';
import EditPillScreen from '../screens/admin/EditPillScreen';
import PillOverviewScreen from '../screens/admin/PillOverviewScreen';
import AddTaskScreen from '../screens/admin/AddTaskScreen';

const AdminHomeStack = createStackNavigator();

function AdminHomeStackScreen() {
	return (
		<AdminHomeStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<AdminHomeStack.Screen name='Home' component={MainScreen} />
		</AdminHomeStack.Navigator>
	);
}

const AdminPillStack = createStackNavigator();

function AdminPillStackScreen() {
	return (
		<AdminPillStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<AdminPillStack.Screen
				name='Pills'
				component={PillOverviewScreen}
				options={({ navigation }) => ({
					title: 'Pill Reminders',
					headerRight: (tabInfo) => (
						<MaterialCommunityIcons
							name='plus-circle-outline'
							color='black'
							size={20}
							onPress={() => navigation.navigate('Add Pill')}
						/>
					),
					headerRightContainerStyle: { paddingRight: 30, paddingBottom: 5 },
				})}
			/>
			<AdminPillStack.Screen name='Add Pill' component={AddNewPillScreen} />
			<AdminPillStack.Screen name='Edit Pill' component={EditPillScreen} />
		</AdminPillStack.Navigator>
	);
}

const AdminMoodStack = createStackNavigator();

function AdminMoodStackScreen() {
	return (
		<AdminMoodStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<AdminMoodStack.Screen
				name='Mood'
				component={MoodTrackerScreen}
				options={{
					title: 'Mood Tracker',
				}}
			/>
		</AdminMoodStack.Navigator>
	);
}

const AdminTasksStack = createStackNavigator();

function AdminTasksStackScreen() {
	return (
		<AdminTasksStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<AdminTasksStack.Screen
				name='Tasks'
				component={TasksScreen}
				options={{
					title: 'Daily Tasks',
				}}
			/>
			<AdminTasksStack.Screen name='Add Task' component={AddTaskScreen} />
		</AdminTasksStack.Navigator>
	);
}

const AdminSettingsStack = createStackNavigator();

function AdminSettingsStackScreen() {
	return (
		<AdminSettingsStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<AdminSettingsStack.Screen name='Settings' component={SettingsScreen} />
			<AdminSettingsStack.Screen name='Profile' component={ProfileScreen} />
			<AdminSettingsStack.Screen
				name='Track Data'
				component={TrackDataScreen}
			/>
			<AdminSettingsStack.Screen
				name='Supervisor Details'
				component={SupervisorDetailsScreen}
			/>
			<AdminSettingsStack.Screen
				name='App Information'
				component={AppInfoScreen}
			/>
		</AdminSettingsStack.Navigator>
	);
}

const AdminTab = createMaterialBottomTabNavigator();

function AdminTabNavigator() {
	return (
		<NavigationContainer independent={true}>
			<AdminTab.Navigator
				shifting={true}
				activeColor={'black'}
				barStyle={{ backgroundColor: Colors.background }}
			>
				<AdminTab.Screen
					name='Home'
					component={AdminHomeStackScreen}
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
				<AdminTab.Screen
					name='Pills'
					component={AdminPillStackScreen}
					options={{
						tabBarLabel: <Text>Pill</Text>,
						tabBarIcon: (tabInfo) => (
							<MaterialCommunityIcons name='pill' color={'black'} size={25} />
						),
					}}
				/>
				<AdminTab.Screen
					name='Mood'
					component={AdminMoodStackScreen}
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
				<AdminTab.Screen
					name='Tasks'
					component={AdminTasksStackScreen}
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

				<AdminTab.Screen
					name='Settings'
					component={AdminSettingsStackScreen}
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
			</AdminTab.Navigator>
		</NavigationContainer>
	);
}

export default AdminTabNavigator;
