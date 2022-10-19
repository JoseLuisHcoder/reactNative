import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import RoootNavigator from './src/navigations/RootNavigator'



const App = () => {
  return (
    <RoootNavigator />
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})