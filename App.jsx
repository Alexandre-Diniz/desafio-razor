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

  const inserir = item => {
    setPersonList([...personList,item])
  }

  const excluir = id => {
    setPersonList(personList.filter(item=>item.id!==id))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Formulario
        getPersonList={personList => setPersonList(personList)}
        personList={personList}
        inserir={inserir}
      />
      <PersonList
        excluir={excluir}
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
