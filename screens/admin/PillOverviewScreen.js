import React from 'react';
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import DateText from '../../components/DateText';
import { PILLS } from '../../data/dummy-data';
import Colors from '../../constants/Colors';
import PillItem from '../../components/PillItem';
import DefaultText from '../../components/DefaultText';

const PillOverviewScreen = (props) => {
	return (
		<View style={styles.screen}>
			<View style={styles.titleContainer}>
				<DateText />
				<DefaultText>Click on a pill to edit or view details.</DefaultText>
			</View>
			<SafeAreaView style={styles.listContainer}>
				<FlatList
					style={{ width: '100%' }}
					data={PILLS}
					renderItem={({ item }) => (
						<View style={styles.pillContainer}>
							<PillItem
								admin={true}
								title={item.title}
								time={item.time}
								quantity={item.quantity}
								onPress={() => props.navigation.navigate('Edit Pill')}
							/>
						</View>
					)}
					keyExtractor={(item) => item.id}
				/>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: Colors.background,
	},

	title: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
	},
	titleContainer: {
		padding: 15,
		margin: 20,
		flex: 1,
		alignItems: 'center',
	},
	listContainer: {
		flex: 12,
		width: '95%',
	},
	pillContainer: {
		alignItems: 'center',
	},
});

export default PillOverviewScreen;
