import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [ listUser, setListUser ] = useState([]);
	const [ isVisible, setVisible ] = useState(false);

	const startAddGoalHandler = () => {
		setVisible(true);
	};

	const endAddGoalHandler = () => {
		setVisible(false);
	};

	const addListUser = (userPass) => {
		setListUser((currUser) => [
			...currUser,
			{
				text: userPass,
				// key: Math.random().toString() }
				id: Math.random().toString()
			}
		]);
		endAddGoalHandler();
	};

	const deleteGoalHandler = (id) => {
		setListUser((users) => {
			return users.filter((user) => user.id !== id);
		});
	};

	return (
		<>
			<StatusBar style='light'/>
			<View style={styles.appContainer}>
				<Button title="Add New User" color="#5e0acc" onPress={startAddGoalHandler} />
				<GoalInput visible={isVisible} onAddGoal={addListUser} closeButton={endAddGoalHandler} />
				<View style={styles.goalsContainer}>
					<FlatList
						data={listUser}
						renderItem={(itemData) => {
							itemData.index;
							return (
								<GoalItem
									id={itemData.item.id}
									text={itemData.item.text}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
						keyExtractor={(item, index) => {
							return item.id;
						}}
						alwaysBounceVertical={false}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16
	},
	goalsContainer: {
		flex: 5
	}
});
