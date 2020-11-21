import React, {useState } from 'react';
import { StyleSheet, Keyboard, View, Button, TextInput, ToastAndroid} from 'react-native';

export default function addTodo({submitHandler}){
    const [text, setText] = useState('');
    const changeHandler = (e) => {
        setText(e);
    }
    
    
    return (
        <View>
            <TextInput
            style = {addstyles.input}
            placeholder =  'New to-do...'
            onChangeText = {changeHandler}
            value={text}
            />
            <Button onPress={()=>{
                if(text.length>0){
                submitHandler(text);
                setText('');  
                Keyboard.dismiss();
                }
                else
                {
                    Keyboard.dismiss();
                    ToastAndroid.showWithGravityAndOffset('Empty To-do!', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 60);

                }
               
                }} title = 'Add' color='#0362fc'/>
        </View>
    )
}

const addstyles = StyleSheet.create({
    input: {
     marginBottom:10,
     paddingHorizontal:8,
     paddingVertical:6,
     borderBottomWidth:1,
     borderBottomColor:'#ddd',
     fontSize:15,
    }
  });
  