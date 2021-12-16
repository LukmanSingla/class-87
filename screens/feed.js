import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import * as font from "expo-font";
import AppLoading from "expo-app-loading";
import App from "../App";
import StoryCard from "./StoryCard";
import { RFValue } from "react-native-responsive-fontsize";

var Bubblegum = {
  "bubbleGum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }
  async loadFonts() {
    await font.loadAsync(Bubblegum);
    this.setState({
      fontLoaded: true,
    });
  }
  componentDidMount() {
    this.loadFonts();
  }

  renderItem = ({ item: story }) => {
    return <StoryCard story={story} navigation={this.props.navigation} />;
  };
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.safeView} />
          <View style={styles.titleContainer}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.title}>Storytelling</Text>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              renderItem={this.renderItem}
              data={require("./temp_stories.json")}
              keyExtractor={(index, item) => index}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#15193c",
    justifyContent: "center",
  },
  safeView: {
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  logo: {
    height: RFValue(30),
    width: RFValue(30),
    resizeMode: "contain",
  },
  titleContainer: {
    flex: 0.1,
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 30,
    marginLeft: 30,
    fontFamily: "bubbleGum-Sans",
  },
  cardContainer: {
    flex: 0.9,
  },
});
