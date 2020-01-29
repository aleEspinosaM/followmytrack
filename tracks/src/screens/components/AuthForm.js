import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitText
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
        label='Password'
        value={password}
        onChangeText={text => setPassword(text)} />
      <Spacer>
        {
          errorMessage &&
          <Spacer>
            <Text style={styles.error}>{errorMessage}</Text>
          </Spacer>
        }
        <Button
          title={submitText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 14
  },
})


export default AuthForm
