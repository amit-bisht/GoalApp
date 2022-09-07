import { StyleSheet,View,Text } from "react-native";
const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.itemData.item.text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
        color: 'white',
    },
    goalText: {
        color: 'white',
    }
})
export default GoalItem;