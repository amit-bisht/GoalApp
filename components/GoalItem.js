import { StyleSheet, View, Text, Pressable } from "react-native";
const GoalItem = (props) => {
  function deleteHandler() {
    props.onDelete(props.itemData.item.id)
  }
  return (

    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: '#dddddd' }} onPress={deleteHandler}>
        <Text style={styles.goalText}>{props.itemData.item.text}</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  goalText: {
    color: 'white',
    padding: 8,
  }
})
export default GoalItem;