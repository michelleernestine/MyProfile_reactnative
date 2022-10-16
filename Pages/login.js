import { Image, StyleSheet, Text, View, TextInput, Button} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from "../styling/stylinglogin";

export default function Login({navigation}) {
  const [nama, setNama] = React.useState("")
  const [pass, setPass] = React.useState("")
  const validateForm = async () => {
    if (nama =="") {
      alert("nama harus diisi")
    } else if (pass =="") {
      alert("password harus diisi")
    } else {

      try {
        await AsyncStorage.setItem("@nama", nama)
        await AsyncStorage.setItem("@password", pass)
        navigation.replace("Homepage")
      } catch(e) {
        console.log(e)
      }
    }
  }
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.heading}>Welcome</Text>

            <Text style={styles.heading2}>to my profile</Text>
        </View>
        
        <View style={{marginTop:60}}>
            <Text style={{fontSize: 20, margin: 5}}>Nama Lengkap</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here.. "
                value={nama}
                onChangeText={(inputan)=>setNama(inputan)}
            />
        </View>
        
        <Text style={{fontSize: 20, margin: 5}}>Password</Text>
        <TextInput
            style={styles.input}
            placeholder="Type here.. "
            secureTextEntry={true}
            onChangeText={(inputan)=>setPass(inputan)}
        />
        <Button title="Sign In" onPress={validateForm} />
    </View>
  );
}