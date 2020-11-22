import React from 'react';
import { StyleSheet, Text,View, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


export default function TodoItem({item, pressHandler}){
  return (
      <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <View style ={tstyles.item} >
        <MaterialIcons name='delete' size={22} color='#222'/>
        <Text style={tstyles.text}>{item.text}</Text>
        </View>
          
      </TouchableOpacity>
  )  
}

const tstyles = StyleSheet.create({
    item: {
     marginTop:16,
     padding:16,
     borderColor:'#bbb',
     borderStyle:'solid',
     borderRadius:10,
     borderWidth:1,
     backgroundColor:'#9bb9eb',
     fontWeight:'normal',
     flexDirection: 'row',
     
    },
    text:{
    fontSize:16,  
    marginLeft:10
    }
  });
  