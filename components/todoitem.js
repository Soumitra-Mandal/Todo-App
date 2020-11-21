import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItem({item, pressHandler}){
  return (
      <TouchableOpacity onPress={()=>pressHandler(item.key)}>
          <Text style={tstyles.item}>{item.text}</Text>
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
     fontSize:16,
     textAlign:"center"
    }
  });
  