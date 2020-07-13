import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import JournalScreen from '../screens/JournalScreen';
import MainScreen from '../screens/MainScreen';
import MoodTrackerScreen from '../screens/MoodTrackerScreen';
import PillReminderScreen from '../screens/PillReminderScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PastJournalEntriesScreen from '../screens/PastJournalEntriesScreen';
import AddNewPillScreen from '../screens/AddNewPillScreen';
import DefaultButton from '../components/DefaultButton';
import Colors from '../constants/Colors';

const MainStack = createStackNavigator();

function MainStackScreen() {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.yellow },
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
				headerStyle: { backgroundColor: Colors.yellow },
			}}
		>
			<PillStack.Screen
				name='Pills'
				component={PillReminderScreen}
				options={({ navigation }) => ({
					title: 'Pill Reminders',
					headerRight: () => (
						<DefaultButton
							onPress={() => navigation.navigate('Add Pill')}
							title='Add Pill'
						/>
					),
					headerRightContainerStyle: { padding: 20 },
				})}
			/>
			<PillStack.Screen
				name='Add Pill'
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
				headerStyle: { backgroundColor: Colors.yellow },
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

const JournalStack = createStackNavigator();

function JournalStackScreen() {
	return (
		<JournalStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.yellow },
			}}
		>
			<JournalStack.Screen
				name='Journal'
				component={JournalScreen}
				options={{
					title: 'Daily Journal',
				}}
			/>
			<JournalStack.Screen
				name='PastJournal'
				component={PastJournalEntriesScreen}
				options={{ title: 'Past Journal Entries' }}
			/>
		</JournalStack.Navigator>
	);
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
	return (
		<SettingsStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontFamily: 'rubik-medium', fontSize: 25 },
				headerStyle: { backgroundColor: Colors.yellow },
			}}
		>
			<SettingsStack.Screen
				name='Settings'
				component={SettingsScreen}
				options={{
					title: 'Settings',
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
				barStyle={{ backgroundColor: Colors.yellow }}
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
					name='Journal'
					component={JournalStackScreen}
					options={{
						tabBarLabel: 'Journal',
						tabBarIcon: (tabInfo) => (
							<MaterialCommunityIcons name='pencil' color={'black'} size={25} />
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
