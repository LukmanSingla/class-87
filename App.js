import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./screens/loginScreen";
import DashboardScreen from "./screens/dashboardScreen";
import LoadingScreen from "./screens/loadingScreen";
import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const AppNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
});
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
