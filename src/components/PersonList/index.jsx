import React, { } from 'react'
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView
} from 'react-native'
import Item from './Item'
import RemoveItem from './RemoveItem'

export default function ({ personList, getPersonList }) {
  const list = personList.map(item => {
    return (
      <View key={item.id}
        style={styles.itemBox}
      >
        <View style={styles.item} >
          <Item item={item} />
        </View>
        <RemoveItem item={item} personList={personList} removeItem={list=>getPersonList(list)} />
      </View>
    )
  })
  return (
    <View style={styles.container} >
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container} >
          {list}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:4
  },
  scroll: {
    width: '100%',
  },
  itemBox: {
    flexDirection: 'row'
  },
  item:{
    width:'80%',
    justifyContent:'center',
    alignItems:'center',
  }
})