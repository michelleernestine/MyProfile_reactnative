import {Image, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { StackActions } from "@react-navigation/native";
import {AsyncStorage} from "@react-native-async-storage/async-storage";
import {styles} from "../styling/stylingsplashscreen";

authPage = async (navigation) => {
  try {
    const value = await AsyncStorage.getItem("@nama")
    if(value !== null) {
      navigation.replace("homepage")
    } else {
      navigation.replace("login")
    }
  } catch(e) {
    console.log(e)
  }
}

export default class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.dispatch(StackActions.replace("Login"));
        }, 2000);
      }
      render() {
        return (
          <View style={styles.container}>
            <Text style={styles.heading}>Hi!</Text>
          </View>
        );
      }
}
