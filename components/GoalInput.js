import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";
const GoalInput = (props) => {
  const [enteredText, setEnterdText] = useState("");
  function goalInputHandler(enteredText) {
    console.log(enteredText)
    setEnterdText(enteredText)
  }
  function addGoalHandler() {
    props.onAddGoal(enteredText)
    setEnterdText("")
  }
  return (
    <Modal animationType="slide">
      <View style={styles.inputContainer}>
      <TextInput value={enteredText} onChangeText={goalInputHandler} style={styles.textInput} placeholder='Enter your goals' />
      <View>
        <Button title='Add Goal' onPress={addGoalHandler} />
      // <Button title="close" onPress={()=>{props.onHide}} />
      </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
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
    borderColor: "#cccccc",
    width: '70%',
    marginRight: 8,
    padding: 8
  },
})
export default GoalInput;