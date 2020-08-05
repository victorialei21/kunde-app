import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import DefaultText from '../components/DefaultText';

const BadgeItem = (props) => {
	return (
		<View style={styles.badgeItem}>
			<Image source={props.source} style={styles.badge} />
			<DefaultText style={{ textAlign: 'center' }}>
				{props.description}
			</DefaultText>
		</View>
	);
};

const styles = StyleSheet.create({
	badgeItem: {
		height: 130,
		width: 120,
		justifyContent: 'center',
		alignItems: 'center',
	},
	badge: {
		height: 100,
		width: 100,
	},
});

export default BadgeItem;
