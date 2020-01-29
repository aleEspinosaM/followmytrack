import React, {useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import Spacer from './components/Spacer'
import { Context as AuthContext } from '../context/authContext'
import AuthForm from './components/AuthForm'
import NavLink from './components/NavLink'

const SignupScreen = ({navigation}) => {
  const { state, signup, cleanErrorMessage } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={cleanErrorMessage}
      />
      <AuthForm
        headerText='Sign up for Tracker'
        errorMessage={state.errorMessage}
        submitText='Sign up'
        onSubmit={({email, password}) => signup({email, password})}
      />
      <Spacer>
        <NavLink text='Already have an Account SIGN IN' routeName='Signin' />
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

SignupScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

export default SignupScreen
