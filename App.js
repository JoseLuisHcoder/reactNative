import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import RoootNavigator from './src/navigations/RootNavigator'
import { OriginContextProvider } from './src/contexts/contexts'



const App = () => {
  return (
    <OriginContextProvider>
       <RoootNavigator />
    </OriginContextProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})