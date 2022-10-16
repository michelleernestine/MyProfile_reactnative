import { Image, StyleSheet, Text, View, ScrollView, AccessibilityInfo, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from "../styling/stylinghomepage";

export default function Homepage({navigation}) {
  const [namaku, setNamaku] = useState("")
  useEffect(() => {
    getData()
  })
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@nama")
      setNamaku(value)
    } catch (e) {
      console.log(e)
    }
  }
  toggleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@nama");
      navigation.replace("Login")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.heading}>
      <TouchableOpacity onPress={() => {
          toggleLogout();
        }}>
        <Image source={require("../assets/exit.png")} style ={styles.imgheading} />
        </TouchableOpacity>
      </View>
        <View style={{backgroundColor: "#18105B", alignItems: "center"}}>
            <Image source={require("../assets/foto1.jpeg")} style={{width: 150, height: 150, marginTop: 30, borderColor: "black", borderWidth: 5, borderRadius: 100}} />
            <Text style={styles.heading}>{namaku}</Text>
            <Text style={{color: "white", marginBottom: 10}}>Front End Developer</Text>
        </View>

        <View style={styles.about}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>About Me</Text>
            <Text style={{marginTop: 5,}}>Hi, my name is Michelle Ernestine but you can call me Michelle. I'm an animal lovers escpecially dogs, because of that I raise 2 dogs. I also want to gain experience in various fields. I also like to socialize with others and meet new peoples.</Text>
        </View>

        <Text style={{fontSize: 20, fontWeight: "bold", margin: 15}}>Skills</Text>

        <View style={styles.skills}>
            <View style={{flexDirection: "row"}}>
                <Image source={require("../assets/python.png")} style={styles.skills2} />
                <Image source={require("../assets/react.jpeg")} style={styles.skills2} />
            </View>
            <View style={{flexDirection: "row"}}>
                <Image source={require("../assets/html.png")} style={styles.skills2} />
                <Image source={require("../assets/css.jpeg")} style={styles.skills2} />
            </View>
        </View>

        <View style={{flexDirection: "column"}}>
            <View style={{margin: 15}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Experience</Text>
                <Text style={{color: "#969696", marginVertical: 15}}>Front End Developer | 2022-present</Text>
                <Text>Develop mobile application with react native technology for ios and android platform</Text>
            </View>
            <View style={{margin: 15}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>Education</Text>
            <Text style={{color: "#969696", marginVertical: 15}}>Bina Nusantara University</Text>
            <Text>Computer Science - Designpreneur</Text>
            <Text>2019-present</Text>
            </View>
        </View>

        <View style={{width: "90%", alignSelf: "center", marginBottom: 25}}>
          <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>My Interest</Text>
        </View>
            <View style={{flexDirection: "row"}}>
                <View style={{width: "33%", alignItems: "flex-start"}}>
                    <Image source={require("../assets/game.png")} style={styles.skills2} />
                </View>
                <View style={{width: "33%", alignSelf: "center"}}>
                  <Image source={require("../assets/hike.jpeg")} style={styles.skills2} />
                </View>
                <View style={{width: "33%", alignSelf: "flex-end"}}>
                  <Image source={require("../assets/travelling.png")} style={styles.skills2} />
                </View>
            </View>
        </View>
        </View>
        </ScrollView>
  );
}


