import React, { cloneElement, useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  Pressable,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";


const Profile = () => {
  const listTab = ["Public", "Unlisted"];
  const [list, setList] = React.useState("Public");

  const setListFilter = (list) => {
    setList(list);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/images/ProfilePagePicture.png")}
          resizeMode="contain"
          style={{
            borderRadius: 25, height: 100, width: 100,
          }}
        />
        <Text style={{ fontSize: 20, padding: 10 }}>
          Full name
        </Text>
        <Text style={{ padding: 10 }}>
          And detailed information
        </Text>
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <View style={styles.buttonView}>
          <Pressable style={styles.btn} >
            <Text style={styles.signInBtn}>Edit Profile</Text>
          </Pressable>
        </View>
        <View style={styles.listTab}>
          {listTab.map((tab, index) => (
            <TouchableOpacity
              style={[
                styles.btnTab,
                list === tab && styles.btnTabActive,
              ]}
              key={index}
              onPress={() => setListFilter(tab)}
            >
              <Text
                style={
                  list === tab ? styles.textTabActive : styles.textTab
                }
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Text
            style={styles.title}>
            {"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
          </Text>
          <Image
            source={require("../assets/images/ProfileImage.png")}
            resizeMode="contain"
            style={{
              margin: 15
            }}
          />
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff"
  },
  buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  signInBtn: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
  btn: {
    width: 200,
    backgroundColor: "#0E39A9",
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 42,
    width: "90%"
  },
  listTab: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 30,
    marginRight: 20,
    justifyContent: "center",
    alignContent: "center"

  },
  btnTab: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 42,
    marginRight: 10,
    borderColor: "#1974D2",
    borderWidth: 1,
  },
  btnTabActive: {
    backgroundColor: "#1974D2",
  },
  textTabActive: {
    color: "#ffffff",
    fontSize: 24,
    borderRadius: 20,
    marginRight: 10,
    textAlign: "center",
    padding: 15,
    marginLeft: 5
  },
  textTab: {
    fontSize: 21,
    color: "#1974D2",
    textAlign: "center",
    padding: 15,
  },
  title: {
    fontSize: 15,
    textAlign: "left",
    marginLeft: 12,
    wordWrap: "break-all",
  },
});

export default Profile