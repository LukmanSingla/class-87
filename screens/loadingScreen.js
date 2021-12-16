import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import firebase from "firebase";
export default class LoadingScreen extends Component {
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("DashboardScreen");
      } else {
        this.props.navigation.navigate("LoginScreen");
      }
    });
  };
  componentDidMount() {
    this.checkIfLoggedIn();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white", alignSelf: "center" }}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    justifyContent: "center",
    backgroundColor: "#15193c",
  },
});
