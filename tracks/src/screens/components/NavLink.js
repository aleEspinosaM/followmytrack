import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Text } from 'react-native-elements'

const NavLink = ({
  text, 
  routeName, 
  navigation
}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
})


export default withNavigation(NavLink)

