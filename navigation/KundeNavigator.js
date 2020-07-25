import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import UserTabNavigator from './UserNavigator';
import AdminTabNavigator from './AdminNavigator';

const MainNavigator = createStackNavigator();

function KundeNavigator() {
	return (
		<NavigationContainer independent={true}>
			<MainNavigator.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<MainNavigator.Screen name='Login' component={LoginScreen} />
				<MainNavigator.Screen name='User' component={UserTabNavigator} />
				{/* <MainNavigator.Screen name='Admin' component={AdminTabNavigator} /> */}
			</MainNavigator.Navigator>
		</NavigationContainer>
	);
}

export default KundeNavigator;
