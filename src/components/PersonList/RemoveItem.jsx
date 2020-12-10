import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'

export default function({personList, item, removeItem}){
  return(
    <TouchableOpacity 
      style={styles.container}
      onPress={()=>{
        const filter = personList.filter(person=>person!==item)
        removeItem(filter)
      }}
      >
      <Text style={styles.text} >X</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#D93025',
    height:25,
    width:25,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'white',
    fontWeight:'bold',
    fontSize:18
  }
})