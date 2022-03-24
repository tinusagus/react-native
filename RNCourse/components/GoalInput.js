import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

const GoalInput = (props) => {
	const [ user, setUser ] = useState('');

	const userHandler = (user) => {
		setUser(user);
	};

	const addGoalHandler = () => {
		props.onAddGoal(user);
		setUser('');
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image style={styles.image} source={require('../assets/images/goal.png')} />
				<TextInput style={styles.textInput} placeholder="Your name" onChangeText={userHandler} value={user} />

				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add User" onPress={addGoalHandler} color="#5e0acc" />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.closeButton} color="#f31282" />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#311b6b'
	},
	image: {
		width: 100,
		height: 100
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 6,
		width: '100%',
		padding: 16,
		marginTop: 16
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row'
	},
	button: {
		width: 100,
		marginHorizontal: 8
	}
});

export default GoalInput;
