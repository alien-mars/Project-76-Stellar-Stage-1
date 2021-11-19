import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Home Screen</Text>
                <TouchableOpacity style={{
                    backgroundColor : "#398FA6",
                    margin : 20,
                    padding : 10,
                    color : "white"
                }}>Space Craft</TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor : "#398FA6",
                    padding : 10,
                    color : "white"
                }}>Star Map</TouchableOpacity>
            </View>
        )
    }
}