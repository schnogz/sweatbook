import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

export const Landing = () => (
	<View style={styles.container}>
		<View style={styles.titleContainer}>
			<Text style={styles.title}>
				Sweatbook
			</Text>
		</View>
		<View style={styles.lastWorkoutContainer}>
			<Text style={styles.lastWorkoutTitle}>
				Log your fitness
			</Text>
		</View>
		<View style={{ padding: 30 }}>
			<TouchableOpacity style={styles.button}>
				<Text>Start Workout</Text>
			</TouchableOpacity>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'mediumvioletred'
	},
	titleContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 0.2
	},
	title: {
		fontSize: 48,
		fontWeight: '500',
		color: 'white',
		textAlign: 'center'
	},
	lastWorkoutContainer: {
		flex: 0.3
	},
	lastWorkoutTitle: {
		fontSize: 30,
		fontWeight: '100',
		color: 'blue'
	},
	button: {
		borderColor: '#EADCDC',
		padding: 10,
		borderRadius: 10
	},
	buttonText: {
		color: '#EADCDC'
	}
});