import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigator from "../Components/drawerNavigator";
export default class DashboardScreen extends Component {
  render() {
    return <DrawerNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
