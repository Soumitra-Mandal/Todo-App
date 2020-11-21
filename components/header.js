import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return(
        <View style={headerstyles.header}>
            <Text style = {headerstyles.title}>My Todos</Text>
        </View>
    )
}

const headerstyles = StyleSheet.create({
    header: {
     height:80,
     padding:38,
     backgroundColor:'#3f62fc'
    },
    title:{
        textAlign:'center',
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
    }
  });
  