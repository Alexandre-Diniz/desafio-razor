import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'

export default function({item, excluir}){
  return(
    <TouchableOpacity 
      style={styles.container}
      onPress={()=>{
        excluir(item.id)
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