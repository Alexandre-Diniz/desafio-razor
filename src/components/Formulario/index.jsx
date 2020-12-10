import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native'

export default function ({ personList, getPersonList }) {
  const [person, setPerson] = useState('')
  const [list, setList] = useState([])
  const [clearInput, setClearInput] = useState('')

  return (
    <View style={styles.container} >
      <View
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          value={person}
          placeholder='adicione alguem...'
          autoFocus
          onChangeText={person => {
            setPerson(person)
          }}
        />
      </View>
      <TouchableOpacity
        disabled={person === '' ? true : false}
        style={[styles.buttonContainer,{backgroundColor:person===''?'#63D786':'#0DC143'}]}
        onPress={() => {
          if (person !== '') {
            getPersonList([...personList, { person, id: `${new Date()}` }])
            setPerson('')
          }
        }}
      >
        <Text style={styles.buttonText} >INSERIR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius:5
  },
  input: {
    width: '90%',
    height: '90%',
    paddingHorizontal: 4,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 20,
    borderColor: '#0B9D37',
    borderWidth: 1,
    borderRadius:5,
    backgroundColor:'#0DC143'
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:16
  }
})