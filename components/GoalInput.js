import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
const GoalInput = (props) => {
    const [enteredText, setEnterdText] = useState("");
    function goalInputHandler(enteredText) {
        console.log(enteredText)
        setEnterdText(enteredText)
      }
    return (
        <View style={styles.inputContainer}>
            <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder='Enter your goals' />
            <Button title='Add Goal' onPress={()=>{props.onAddGoal(enteredText)}} />
        </View>
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