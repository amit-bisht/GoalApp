import { View, TextInput, Button, StyleSheet, Modal,Image } from "react-native";
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
        <Modal visible={props.displayForm} animationType="fade">
            <View style={styles.inputContainer}>
                <Image source={require("../assets/images/goal.png")} style={styles.image}/>
                <TextInput value={enteredText} onChangeText={goalInputHandler} style={styles.textInput} placeholder='Enter your goals' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' color="#5e0acc" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="close" color="#f31282" onPress={props.onHide} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
        backgroundColor:'#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor:"#e4d0ff",
        width: '100%',
        padding: 16,
        color:"#120438",
        borderRadius:6
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop:10

    },
    button:{
        width:100,
        marginHorizontal:8
    },
    image:{
        width:100,
        height:100,
        margin:20
    }
})
export default GoalInput;