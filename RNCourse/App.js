import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
	const [ user, setUser ] = useState('');
	const [ listUser, setListUser ] = useState([]);

	const userHandler = (user) => {
		setUser(user);
	};

	const addListUser = () => {
		setListUser((currUser) => [
			...currUser,
			{
				text: user,
				// key: Math.random().toString() }
				id: Math.random().toString()
			}
		]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder="Your name" onChangeText={userHandler} />
				<Button title="Add User" onPress={addListUser} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					alwaysBounceVertical={false}
					data={listUser}
					keyExtractor={(item, index) => {
						return item.id;
					}}
					renderItem={(itemData) => {
						itemData.index;
						return (
							<View style={styles.goalItem}>
								<Text style={styles.textItem}>{itemData.item.text}</Text>
							</View>
						);
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc'
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8
	},
	goalsContainer: {
		flex: 5
	},
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc'
	},
	textItem: {
		color: 'white'
	}
});
