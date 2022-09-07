import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
const App = () => {
  const [enteredText, setEnterdText] = useState("");
  const [goals, setGoals] = useState([])
  function goalInputHandler(enteredText) {
    console.log(enteredText)
    setEnterdText(enteredText)
  }
  function addGoalHandler() {
    console.log("pressed")
    setGoals((prevData) => {
      return ([...prevData, {text:enteredText,id:Math.random().toString()}])
    })
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder='Enter your goals' />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(itemData) => {
          return <GoalItem itemData={itemData}/>
        }}
        keyExtractor={(item,index)=>{ return(item.id)}}
        >
        </FlatList>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
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
    borderColor: "#cccccc",
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  

})
export default App;