import React, {useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import {NavigationEvents} from 'react-navigation'
import AuthForm from './components/AuthForm'
import NavLink from './components/NavLink'
import Spacer from './components/Spacer'
import { Context as AuthContext } from '../context/authContext'

const SigninScreen = () => {
  const { state, signin, cleanErrorMessage } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={cleanErrorMessage}
      />
      <AuthForm
        headerText='Sign in for Tracker'
        errorMessage={state.errorMessage}
        submitText='Sign in'
        onSubmit={({ email, password }) => signin({ email, password })}
      />
      <Spacer>
        <NavLink text='New in Tracker SIGN UP' routeName='Signup' />
      </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
})

SigninScreen.navigationOptions = () => {
  return {
    header: null,
    headerBackTitle: null,
  };
};

export default SigninScreen
