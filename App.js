import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import KundeNavigator from './navigation/KundeNavigator';
import moodsReducer from './store/reducers/moods';

enableScreens();

const rootReducer = combineReducers({
	moods: moodsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
	return Font.loadAsync({
		'rubik-regular': require('./assets/fonts/Rubik-Regular.ttf'),
		'rubik-light': require('./assets/fonts/Rubik-Light.ttf'),
		'rubik-medium': require('./assets/fonts/Rubik-Medium.ttf'),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
			/>
		);
	}

	return (
		<Provider store={store}>
			<KundeNavigator />
		</Provider>
	);
}
