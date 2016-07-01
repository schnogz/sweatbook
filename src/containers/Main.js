import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Workout, History, Settings } from './../containers';
import TabView from 'react-native-scrollable-tab-view';

export const Main = () => (
	<View style={styles.tabs}>
		<TabView
			tabBarTextStyle={{ fontSize: 18, fontWeight: '900' }}
			tabBarActiveTextColor="white"
			tabBarUnderlineColor="white"
			tabBarInactiveTextColor="lightskyblue"
			tabBarPosition="overlayBottom">
			<Workout tabLabel="Workout"></Workout>
			<History tabLabel="History"></History>
			<Settings tabLabel="Settings"></Settings>
		</TabView>
	</View>
);

const styles = StyleSheet.create({
	tabs: {
		flex: 1,
		backgroundColor: 'transparent'
	}
});