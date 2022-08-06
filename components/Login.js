import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';
import React from "react";
import ArticleList from './ArticleList';

const Separator = () => <View style={styles.separator} />;


const Login = ({navigation}) => {
  
  const [userName, onChangeuserName] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  
 
  return(
  <SafeAreaView style={styles.container}>
    
    <View>     
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
        onPress={() =>
            navigation.navigate('ArticleList')}
      />
    </View>
    <Separator />
    
  </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  }, 
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
}


);

export default Login;
