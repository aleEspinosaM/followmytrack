import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Context as TrackContext} from '../context/trackContext'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailsScreen = ({navigation}) => {
  const {state} = useContext(TrackContext)
  const _id = navigation.getParam('_id')
  const track = state.find(s => s._id === _id)
  const initCoords = track.locations[0].coords
  return (
    <>
      <Text style={styles.text}>{track.name}</Text>
      <MapView style={styles.map} initialRegion={{
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
        ...initCoords
      }}>
        <Polyline coordinates={track.locations.map(t => t.coords)} />
      </MapView>
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
  },
  text: {
    fontSize: 40
  }
})


export default TrackDetailsScreen
