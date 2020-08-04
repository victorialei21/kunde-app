import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import UserOverviewScreen from '../screens/admin/UserOverviewScreen';
import AddPillScreen from '../screens/admin/AddPillScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import AppInfoScreen from '../screens/AppInfoScreen';
import EditPillScreen from '../screens/admin/EditPillScreen';
import PillOverviewScreen from '../screens/admin/PillOverviewScreen';
import AddTaskScreen from '../screens/admin/AddTaskScreen';
import UserDetailScreen from '../screens/admin/UserDetailScreen';
import MoodOverviewScreen from '../screens/admin/MoodOverviewScreen';
import TasksOverviewScreen from '../screens/admin/TasksOverviewScreen';
import AddTaskToManyScreen from '../screens/admin/AddTaskToManyScreen';
import AdminSettingsScreen from '../screens/admin/AdminSettingsScreen';
import Colors from '../constants/Colors';

const AdminHomeStack = createStackNavigator();

function AdminHomeStackScreen() {
	return (
		<AdminHomeStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<AdminHomeStack.Screen name='Home' component={UserOverviewScreen} />
			<AdminHomeStack.Screen name='User Detail' component={UserDetailScreen} />
			<AdminHomeStack.Screen
				name='Mood Overview'
				component={MoodOverviewScreen}
			/>
			<AdminHomeStack.Screen
				name='Pill Overview'
				component={PillOverviewScreen}
			/>
			<AdminHomeStack.Screen
				name='Tasks Overview'
				component={TasksOverviewScreen}
			/>
			<AdminHomeStack.Screen name='Add Pill' component={AddPillScreen} />
			<AdminHomeStack.Screen name='Edit Pill' component={EditPillScreen} />
			<AdminHomeStack.Screen name='Add Task' component={AddTaskScreen} />
		</AdminHomeStack.Navigator>
	);
}

const AdminManyTaskStack = createStackNavigator();

function AdminManyTaskStackScreen() {
	return (
		<AdminManyTaskStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<AdminManyTaskStack.Screen
				name='Tasks Quick Add'
				component={AddTaskToManyScreen}
			/>
		</AdminManyTaskStack.Navigator>
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
			<AdminSettingsStack.Screen
				name='Settings'
				component={AdminSettingsScreen}
			/>
			<AdminSettingsStack.Screen name='Profile' component={ProfileScreen} />
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
					name='Tasks'
					component={AdminManyTaskStackScreen}
					options={{
						tabBarLabel: 'Tasks',
						tabBarIcon: (tabInfo) => (
							<MaterialCommunityIcons name='pencil' color={'black'} size={25} />
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
