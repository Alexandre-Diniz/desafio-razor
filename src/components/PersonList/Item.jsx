import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default function({ item }){
  return(
    <View style={styles.container} >
      <Text>{item.person}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:30,
    borderColor:'gray',
    borderWidth:1,
    width:'100%',
    paddingVertical:4,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{

  }
})