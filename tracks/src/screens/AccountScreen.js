import React, {useContext} from 'react'
import { View, StyleSheet ,Text } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from './components/Spacer'
import {SafeAreaView} from 'react-navigation'
import { Context as AuthContext } from '../context/authContext'
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={{fontSize: 30}}>Account screen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
}

const styles = StyleSheet.create({
})

AccountScreen.navigationOptions = () => {
  return {
    title: 'Account',
    tabBarIcon: <FontAwesome name='gear' size={20} />
  }
}

export default AccountScreen
