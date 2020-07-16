import React from 'react';
import {
	StyleSheet,
	View,
	Image,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	TextInput,
} from 'react-native';

import Colors from '../constants/Colors';
import DefaultButton from '../components/DefaultButton';

const LoginScreen = (props) => {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<KeyboardAvoidingView style={styles.screen}>
				<View>
					<Image source={require('../assets/kunde.png')} style={styles.image} />
				</View>
				<View style={styles.bigInputContainer}>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder='Email'
							style={styles.input}
							keyboardType='email-address'
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder='Password'
							style={styles.input}
							secureTextEntry
						/>
					</View>
				</View>
				<DefaultButton title='Log In' style={{ width: 90 }} />
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: Colors.background,
	},
	image: {
		height: 200,
		width: 200,
	},
	input: {
		borderWidth: 0.5,
		maxHeight: 50,
		minHeight: 40,
		padding: 5,
		borderRadius: 10,
	},
	inputContainer: {
		width: '100%',
	},
	bigInputContainer: {
		width: '60%',
		height: '15%',
		justifyContent: 'space-between',
	},
});

export default LoginScreen;
