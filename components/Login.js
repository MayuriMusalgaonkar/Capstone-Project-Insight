import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  Pressable,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TextInput,
} from "react-native";
import React from "react";

const Separator = () => <View style={styles.separator} />;

const Login = ({ navigation }) => {
  const [userName, onChangeuserName] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  //  const loginHandler = () =>

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper}>
        <Image
          style={styles.logo}
          source={require("../assets/images/login_logo.png")}
        />
        <Text style={styles.textFonts}>Welcome Back</Text>
      </View>
      <View style={styles.lower}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeuserName}
            value={userName}
            placeholder="UserName"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
          />
          <Text
            style={[
              styles.textFonts,
              { textAlign: "right", top: -10, marginLeft: 200 },
            ]}
          >
            {" "}
            Forgot Password?
          </Text>
        </View>
        <View style={styles.buttonView}>
          <Pressable
            style={styles.btn}
            onPress={() => {
              navigation.navigate("ArticleList");
            }}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </Pressable>
        </View>
      </View>
      <Separator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // marginHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lower: {
    flex: 3,
  },
  logo: {
    width: 280,
    height: 70,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    borderBottomColor: "#1974D2",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 30,
  },

  textFonts: {
    height: 18,
    width: 121,
    top: 25,
    color: "#1974D2",
    fontWeight: "400",
  },
  inputView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 200,
    backgroundColor: "#0E39A9",
    paddingHorizontal: 30,
    paddingVertical: 18,
  },
  buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    fontSize: 20,
    // fontWeight: 400,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
});

export default Login;
