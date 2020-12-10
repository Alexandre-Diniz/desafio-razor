import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import Formulario from './src/components/Formulario'
import PersonList from './src/components/PersonList'

export default function App() {
  const [personList, setPersonList] = useState([])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Formulario
        getPersonList={personList => setPersonList(personList)}
        personList={personList}
      />
      <PersonList
        personList={personList}
        getPersonList={personList=>setPersonList(personList)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },
})
