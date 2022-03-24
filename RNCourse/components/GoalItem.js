import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: '#300666' }}
				onPress={props.onDeleteItem.bind(this, props.id)}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.textItem}>{props.text}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc'
	},
	pressedItem: {
		opacity: 0.5
	},
	textItem: {
		color: 'white',
		padding: 8
	}
});

export default GoalItem;
