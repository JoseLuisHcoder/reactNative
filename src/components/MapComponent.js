import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import { mapStyle} from "../global/mapStyle"
import MapView, { PROVIDER_GOOGLE,} from 'react-native-maps'; 
import { colors,parameters } from '../global/styles';



export default class MapComponent extends Component {
  render() {
    return (
      <View>
        <MapView 
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            
                >
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    map:{
        height:"100%",
        with:"100%"
    },
})