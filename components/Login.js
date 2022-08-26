import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
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
        source={require('../assets/images/login_logo.png')}
      />
      
      </View>
      <View style={styles.lower}>
        <Text>INSIGHT</Text>
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
        <Button
          title="Login"
          color="#f194ff"
          onPress={() => {
            navigation.navigate("ArticleList");
          }}
        />
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
    backgroundColor: "#ffffff"
  },
  upper:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lower:{
    flex: 3,
  },
  logo:{
    width: 280,
    height: 70,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
