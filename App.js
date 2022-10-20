import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import { DestinationContextProvider, OriginContextProvider } from './src/contexts/contexts'
import RoootNavigator from './src/navigations/RootNavigator'



const App = () => {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RoootNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})