import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
var Bubblegum = {
  "bubbleGum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class CreateStory extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      previewImage: "image1",
      dropdownHeight: 35,
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
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    } else {
      const previewImg = {
        image1: require("../assets/story_image_1.png"),
        image2: require("../assets/story_image_2.png"),
        image3: require("../assets/story_image_3.png"),
        image4: require("../assets/story_image_4.png"),
        image5: require("../assets/story_image_5.png"),
      };
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.safeView} />
          <View style={styles.titleContainer}>
            <View
              style={{
                flex: 0.2,
                alignContent: "center",
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
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.title}>New Story</Text>
            </View>
          </View>
          <View style={styles.form}>
            <ScrollView>
              <Image
                source={previewImg[this.state.previewImage]}
                style={styles.previewImg}
              />
              <View style={{ height: this.state.dropdownHeight }}>
                <DropDownPicker
                  items={[
                    { label: "Image1", value: "image1" },
                    { label: "Image2", value: "image2" },
                    { label: "Image3", value: "image3" },
                    { label: "Image4", value: "image4" },
                    { label: "Image5", value: "image5" },
                  ]}
                  arrowStyle={{ color: "white", fontFamily: "bubbleGum-Sans" }}
                  labelStyle={{ color: "white", fontFamily: "bubbleGum-Sans" }}
                  defaultValue={this.state.previewImage}
                  onClose={() => {
                    this.setState({ dropdownHeight: 35 });
                  }}
                  itemStyle={{
                    justifyContent: "flex-start",
                  }}
                  dropDownStyle={{ backgroundColor: "#2f345d" }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 240 });
                  }}
                  style={styles.dropDownPicker}
                  containerStyle={styles.dropDownContainer}
                  onChangeItem={(item) =>
                    this.setState({
                      previewImage: item.value,
                    })
                  }
                />
              </View>
              <TextInput
                style={styles.storyTitle}
                placeholder={"Story Title"}
                onChangeText={(title) => {
                  this.setState({
                    title,
                  });
                }}
                placeholderTextColor="white"
                textAlignVertical="top"
              />
              <TextInput
                style={styles.storyTitle}
                placeholder={"Description"}
                onChangeText={(description) => {
                  this.setState({
                    description,
                  });
                }}
                placeholderTextColor="white"
                multiline={true}
                numberOfLines={5}
                textAlignVertical="top"
              />
              <TextInput
                style={styles.storyTitle}
                placeholder={"Author"}
                onChangeText={(Author) => {
                  this.setState({
                    Author,
                  });
                }}
                placeholderTextColor="white"
                textAlignVertical="top"
              />
              <TextInput
                style={styles.storyTitle}
                placeholder={"Story"}
                onChangeText={(story) => {
                  this.setState({
                    story,
                  });
                }}
                placeholderTextColor="white"
                multiline={true}
                numberOfLines={20}
                textAlignVertical="top"
              />
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
    padding: 10,
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
  previewImg: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 10,
  },
  picker: {},
  dropDownPicker: {
    backgroundColor: "transparent",
  },
  dropDownContainer: {
    height: 35,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
  },
  form: {
    flex: 0.8,
  },
  storyTitle: {
    borderRadius: 10,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    fontFamily: "bubbleGum-Sans",
    marginTop: 20,
    padding: 10,
  },
});
