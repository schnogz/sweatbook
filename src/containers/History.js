import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const History = (props) => (
	<View style={styles.wrapper}>
		<LinearGradient colors={['#4A148C', '#880E4F']} style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>
					History Page
				</Text>
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
	}
});