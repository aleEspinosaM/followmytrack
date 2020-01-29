import '../_mockLocation'
import React, {useContext, useCallback} from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Map from './components/Map'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import {Context as LocationContext} from '../context/locationContext';
import useLocation from '../hooks/useLocation'
import TrackForm from './components/TrackForm'
import { FontAwesome } from '@expo/vector-icons'


const TrackCreateScreen = ({isFocused}) => {
  const {state, addLocation} = useContext(LocationContext)
  
  const callback = useCallback(
    (location) => addLocation(location, state.recording), [state.recording],
  )
  const [err] = useLocation(isFocused || state.recording, callback)

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2> Create Track</Text>
      <Map/>
      {
        err ? <Text>please enable location services</Text> : null
      }
      <TrackForm/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
})

TrackCreateScreen.navigationOptions = () => {
  return {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={20} />
  }
}

export default withNavigationFocus(TrackCreateScreen)
