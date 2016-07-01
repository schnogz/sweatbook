import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';

export const Landing = (props) => (
	<View style={styles.wrapper}>
		<LinearGradient colors={['#4A148C', '#880E4F']} style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>
					Sweatbook
				</Text>
			</View>
			<View>
				<Text style={styles.subTitle}>
					Welcome back!
				</Text>
			</View>
			<View style={styles.lastWorkoutContainer}>
				<Text style={styles.lastWorkoutTitle}>
					Last workout: June 12, 2016
				</Text>
			</View>
			<View style={styles.startContainer}>
				<Button
					onPress={props.startWorkout}
					style={styles.button}
					textStyle={styles.buttonText}
					children={'New Workout'}
				/>
			</View>
		</LinearGradient>
	</View>
);

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'transparent'
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
	subTitle: {
		fontSize: 34,
		fontWeight: '300',
		color: 'white',
		textAlign: 'center'
	},
	lastWorkoutContainer: {
		flex: 0.3,
		flexDirection: 'row'
	},
	lastWorkoutTitle: {
		textAlign: 'center',
		marginTop: 25,
		fontSize: 26,
		fontWeight: '200',
		color: 'blue'
	},
	startContainer: {
		padding: 30
	},
	button: {
		borderColor: 'white',
		padding: 10,
		borderRadius: 10
	},
	buttonText: {
		fontSize: 22,
		color: 'white'
	}
});