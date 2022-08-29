import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    FlatList,
    View,
    ActivityIndicator,
    Image,
    Pressable
  } from "react-native";


const OnBoardingList = ({ navigation }) => {
    console.log("OnBoarding List ");
  
    const [state, setState] = useState({ data: {}, status: "Idle", error: null });
  
    useEffect(() => {
      console.log("UseEffect called");
      getOnboardingList();
    }, []);
  
    async function getOnboardingList() {
        console.log("HERE")
      setState({ ...state, status: "loading" });
      await fetch("http://10.0.2.2:3000/recommended-articles")
        .then((resp) => resp.json())
        .then((responseJson) =>
        setState({
          data: responseJson,
          status: "resolved",
          error: null,
        })
        )
        .catch((error) => setState({ data: {}, status: "error", error: error }));
    }
  
    const renderItem = ({ item }) =>
      item.category !== "" ? (
        <View style={[styles.item,{flexDirection:'row',justifyContent:'space-around'}]}>
          <Text style={styles.title}>{item.category}</Text>
          <Image style={styles.img}
          source={require( "../assets/images/javascript.jpg")}/>
        </View>
      ) : null;
    return (
      <SafeAreaView style={styles.container}>
        {state.status === 'loading' ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
          </View> :
          <FlatList
            data={state.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />}
           <View style={styles.buttonView}>
          <Pressable
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.doneBtn}>Done</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: "pink",
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    img:{
      width:100,
      height:100
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    btn: {
      textAlign: "center",
      width: 200,
      backgroundColor: "#0E39A9",
      paddingHorizontal: 30,
      paddingVertical: 18,
      marginVertical:40,
      marginLeft:105
    },
    // buttonView: {
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
      
    // },
    doneBtn: {
      fontSize: 20,
      // fontWeight: 400,
      lineHeight: 24,
      letterSpacing: 0,
      textAlign: "center",
      color: "#ffffff",
    },
  });

  export default OnBoardingList;