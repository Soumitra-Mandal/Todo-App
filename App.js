import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, FlatList, Keyboard} from 'react-native';
import Header from './components/header';
import AddTodo from './components/addtodo';
import TodoItem from './components/todoitem';

export default function App() {

  const [todos, setTodos] = useState([  ]);

  const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key)
    })
  }
  const submitHandler = (text)=>{
    setTodos((prevTodos)=>{
      return [...prevTodos,{text:text, key:Math.random().toString()}]
    });
  }
  return (
    <TouchableWithoutFeedback
    onPress={
      ()=>{
        Keyboard.dismiss();

      }
    }
    >
<View style={styles.container}>
   <Header/>
    <View
        style={styles.content}>
            <AddTodo submitHandler = {submitHandler}/>
             <View style={styles.list}>
             <FlatList data = {todos}
               renderItem = {({item})=>(
                <TodoItem item = {item} pressHandler={pressHandler}/>
               )}
             />
             </View>

        </View>

   <StatusBar backgroundColor="white"/>
    </View>
    </TouchableWithoutFeedback>
    
  );  
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:'#fff',
  },
  content:{
    padding:40,
    flex:1
  },
  list:{
    marginTop:20,
    flex:1,
  }
});
