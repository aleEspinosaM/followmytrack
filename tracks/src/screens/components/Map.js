import React, {useContext} from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, {Polyline, Circle} from 'react-native-maps'
import { Context as LocationContext } from '../../context/locationContext';

const Map = () => {
  const {state: {currentLocation, locations} } = useContext(LocationContext)
  // let points = []
  // for (let index = 0; index < 20; index++) {
  //   if(index % 2 === 0) {
  //     points.push({
  //       latitude: 37.33233 + (index * 0.002),
  //       longitude: -122.03121 + (index * 0.001)
  //     })
  //   }
  //   points.push({
  //     latitude: 37.33233 + (index * 0.001),
  //     longitude: -122.03121 + (index * 0.001)
  //   })
  // }
  // console.log(currentLocation)
  if (!currentLocation) {
    return <ActivityIndicator size='large' style={{marginTop: 200}}/>
  }
  // console.log(locations)
  return (
    <View>
      <MapView 
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        style={styles.map}>

          <Circle 
            radius={30}
            strokeColor='rgba(158,158,255,1.0)'
            fillColor='rgba(158,158,255,0.3)'
            center={currentLocation.coords} />
          <Polyline
            coordinates={locations.map(l => l.coords)}
          />
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 400
  }
})

export default Map
