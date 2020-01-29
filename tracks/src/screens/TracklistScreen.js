import React, {useContext} from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {Context as TrackContext} from '../context/trackContext'
import { ListItem } from 'react-native-elements'

const TracklistScreen = ({navigation}) => {
  const {state, fetchTracks } = useContext(TrackContext)
  console.log(state)
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks}/>
      <FlatList 
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => {
              navigation.navigate('TrackDetail', {
                _id: item._id
              })
            }}>
              <ListItem chevron title={item.name}/>
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
})

TracklistScreen.navigationOptions = {
  title: 'Tracks'
}

export default TracklistScreen
