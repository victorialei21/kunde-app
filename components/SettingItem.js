import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import DefaultText from './DefaultText';

const SettingItem = (props) => {
	return (
		<TouchableOpacity
			style={{ ...styles.item, ...props.style }}
			onPress={props.onPress}
		>
			<View style={styles.textContainer}>
				<DefaultText style={{ fontSize: 15 }}>{props.title}</DefaultText>
			</View>
			<View>
				<MaterialIcons name='keyboard-arrow-right' size={20} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '95%',
	},
	textContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
});

export default SettingItem;
