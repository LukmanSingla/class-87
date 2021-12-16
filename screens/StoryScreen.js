import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as font from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-gesture-handler";
import * as Speech from "expo-speech";
var Bubblegum = {
  "bubbleGum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class StoryCard extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      speakerColor: "gray",
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
  initiateTTS(title, author, story, moral) {
    this.setState({
      speakerColor: this.state.speakerColor === "gray" ? "#ee8249" : "gray",
    });
    if (this.state.speakerColor === "gray") {
      Speech.speak(
        `${title} by ${author} ${story} So the moral of the story is ${moral}`
      );
    } else {
      Speech.stop();
    }
  }
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.safeView} />
          <View style={styles.titleContainer}>
            <View
              style={{
                flex: 0.2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </View>
            <View
              style={{
                flex: 0.8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.title}>StoryTelling</Text>
            </View>
          </View>
          <View style={styles.storyCard}>
            <ScrollView>
              <Image
                source={require("../assets/story_image_4.png")}
                style={styles.storyImg}
              />
              <View style={styles.dataContainer}>
                <View>
                  <Text style={styles.title}>
                    {this.props.route.params.story.title}
                  </Text>
                  <Text style={styles.title}>
                    {this.props.route.params.story.author}
                  </Text>
                  <Text style={styles.title}>
                    {this.props.route.params.story.created_on}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.speaker}
                  onPress={() => {
                    this.initiateTTS(
                      this.props.route.params.story.title,
                      this.props.route.params.story.author,
                      this.props.route.params.story.story,
                      this.props.route.params.story.moral
                    );
                  }}
                >
                  <Ionicons
                    name={"volume-high-outline"}
                    size={30}
                    color={this.state.speakerColor}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
              <View style={styles.storyContainer}>
                <Text style={{ color: "white" }}>
                  {this.props.route.params.story.story}
                </Text>
                <Text style={{ color: "white" }}>
                  {this.props.route.params.story.moral}
                </Text>
              </View>
              <View style={styles.likes}>
                <Ionicons
                  name={"heart"}
                  size={RFValue(25)}
                  color={"white"}
                  style={styles.icons}
                />
                <Text style={styles.likesTxt}>12K</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    justifyContent: "center",
    backgroundColor: "#15193c",
  },
  safeView: {
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  logo: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
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
  storyCard: {
    margin: 10,
    borderRadius: 10,
    flex: 0.9,
    backgroundColor: "#2f345d",
  },
  storyImg: {
    height: RFValue(200),
    width: "100%",
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    color: "white",
    fontFamily: "bubbleGum-Sans",
    fontSize: 20,
    marginLeft: 10,
  },
  likesTxt: {
    color: "white",
    fontFamily: "bubbleGum-Sans",
    fontSize: 15,
  },
  likes: {
    backgroundColor: "#eb3948",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    borderRadius: 25,
    alignSelf: "center",
    // height: 35,
  },
  speaker: {
    justifyContent: "center",
    alignItems: "center",
  },
});
