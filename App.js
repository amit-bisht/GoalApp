import { View, StyleSheet, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
const App = () => {
  const [goals, setGoals] = useState([])
  const [displayForm, setDisplayForm] = useState(false)
  function addGoalHandler(enteredText) {
    console.log("pressed")
    setGoals((prevData) => {
      return ([...prevData, { text: enteredText, id: Math.random().toString() }])
    })
    hideDisplayHandler()

  }
  function deleteGoalHandler(id) {
    console.log("deleted")
    const newData = goals.filter(item => item.id !== id)
    setGoals(newData)
  }
  function displayHandler() {
    setDisplayForm(true)
  }
  function hideDisplayHandler() {
    setDisplayForm(false)
  }
  return (
    <>
    <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title="Add a Goal" color="#5e0acc" onPress={displayHandler} />
        <GoalInput displayForm={displayForm} onHide={hideDisplayHandler} onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={(itemData) => {
            return <GoalItem onDelete={deleteGoalHandler} itemData={itemData} />
          }}
            keyExtractor={(item, index) => { return (item.id) }}
          >
          </FlatList>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  },


})
export default App;