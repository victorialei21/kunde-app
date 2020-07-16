import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import TasksScreen from '../screens/TasksScreen';
import MainScreen from '../screens/MainScreen';
import MoodTrackerScreen from '../screens/MoodTrackerScreen';
import PillReminderScreen from '../screens/PillReminderScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PastTasksScreen from '../screens/PastTasksScreen';
import AddNewPillScreen from '../screens/AddNewPillScreen';
import Colors from '../constants/Colors';
import ProfileScreen from '../screens/ProfileScreen';
import TrackDataScreen from '../screens/TrackDataScreen';
import SupervisorDetailsScreen from '../screens/SupervisorDetailsScreen';
import AppInfoScreen from '../screens/AppInfoScreen';
import LoginScreen from '../screens/LoginScreen';

const MainStack = createStackNavigator();

function MainStackScreen() {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<MainStack.Screen
				name='Home'
				component={MainScreen}
				options={{
					title: 'Home',
				}}
			/>
		</MainStack.Navigator>
	);
}

const PillStack = createStackNavigator();

function PillStackScreen() {
	return (
		<PillStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<PillStack.Screen
				name='Pills'
				component={PillReminderScreen}
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
			<PillStack.Screen
				name='Add Pill'
				ç
				component={AddNewPillScreen}
				options={({ navigation }) => ({
					title: 'Add New Pill',
				})}
			/>
		</PillStack.Navigator>
	);
}

const MoodStack = createStackNavigator();

function MoodStackScreen() {
	return (
		<MoodStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<MoodStack.Screen
				name='Mood'
				component={MoodTrackerScreen}
				options={{
					title: 'Mood Tracker',
				}}
			/>
		</MoodStack.Navigator>
	);
}

const TasksStack = createStackNavigator();

function TasksStackScreen() {
	return (
		<TasksStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<TasksStack.Screen
				name='Tasks'
				component={TasksScreen}
				options={{
					title: 'Daily Tasks',
				}}
			/>
			<TasksStack.Screen
				name='Completed Tasks'
				component={PastTasksScreen}
				options={{ title: 'Completed Tasks' }}
			/>
		</TasksStack.Navigator>
	);
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
	return (
		<SettingsStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.background },
			}}
		>
			<SettingsStack.Screen
				name='Settings'
				component={SettingsScreen}
				options={{
					title: 'Settings',
				}}
			/>
			<SettingsStack.Screen name='Profile' component={ProfileScreen} />
			<SettingsStack.Screen name='Track Data' component={TrackDataScreen} />
			<SettingsStack.Screen
				name='Supervisor'
				component={SupervisorDetailsScreen}
				options={{
					title: 'Supervisor Details',
				}}
			/>
			<SettingsStack.Screen
				name='App Info'
				component={AppInfoScreen}
				options={{
					title: 'App Information',
				}}
			/>
		</SettingsStack.Navigator>
	);
}

const Tab = createMaterialBottomTabNavigator();

function KundeNavigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				shifting={true}
				activeColor={'black'}
				barStyle={{ backgroundColor: Colors.background }}
			>
				<Tab.Screen
					name='Home'
					component={MainStackScreen}
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
				<Tab.Screen
					name='Pills'
					component={PillStackScreen}
					options={{
						tabBarLabel: <Text>Pill</Text>,
						tabBarIcon: (tabInfo) => (
							<MaterialCommunityIcons name='pill' color={'black'} size={25} />
						),
					}}
				/>
				<Tab.Screen
					name='Mood'
					component={MoodStackScreen}
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
				<Tab.Screen
					name='Tasks'
					component={TasksStackScreen}
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

				<Tab.Screen
					name='Settings'
					component={SettingsStackScreen}
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
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	header: {
		fontFamily: 'rubrik-medium',
		fontSize: 30,
	},
});

export default KundeNavigator;
