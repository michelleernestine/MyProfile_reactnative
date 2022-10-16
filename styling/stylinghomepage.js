import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    heading: {
      fontSize: 24,
      color: "white",
      marginTop: 5,
      backgroundColor: "#18105B",
    },
    about: {
      margin: 15,
    },
    skills: {
      marginHorizontal: 15,
      marginTop: -5,
      backgroundColor: "white",
    },
    skills2: {
      width: 150,
      height: 50,
      resizeMode: "contain",
    },
    exanded: {
      margin: 15,
      flexDirection: "column",
    },
    imgheading: {
      width: 30,
      height: 30,
      tintColor: "white",
      marginRight: 15,
      marginTop: 20,
      resizeMode: "contain",
      flex: 1,
      alignSelf: "flex-end",
    }
  })
  
  export {styles};