import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  ActivityIndicator,
  Dimensions,
  Image
} from "react-native";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Home = ({ navigation, route }) => {
  console.log("Article List ");

  const [state, setState] = useState({ data: {}, status: "Idle", error: null });

  useEffect(() => {
    console.log("UseEffect called");
    getArticleList();
  }, []);

  async function getArticleList() {
    const body = {
      dataSource: "Cluster0",
      database: "articles",
      collection: "fs.files",
      projection: {
        _id: 1,
        filename: 3,
        author: 2,
        title: 4,
        Keywords: 5,
        chunkSize: 6,
        length: 7,
        uploadDate: 8,
      },
    };
    setState({ ...state, status: "loading" });
    await fetch(
      "https://data.mongodb-api.com/app/data-cijfe/endpoint/data/v1/action/find",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key":
            "zvvB0sCTMCMkkVTJ2hzJsxklizL0IJcp2pZ0yKmGk4AGGQfd3va03166ErC1miIU",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(body),
      }
    )
      .then((resp) => resp.json())
      .then((responseJson) =>
        setState({
          data: responseJson.documents,
          status: "resolved",
          error: null,
        })
      )
      .catch((error) => setState({ data: {}, status: "error", error: error }));
  }

  const renderItem = ({ item }) =>
    item.title !== "" ? (
      // <View style={styles.item}>
      //   <Text onPress={() => {
      //         navigation.navigate('ContentDetails',{
      //           itemId: item._id
      //         });
      //       }} style={styles.title}>{item.title}</Text>
      // </View>
      <View style={styles.mainCardView} onPress={() => {
        navigation.navigate('ContentDetails', {
          itemId: item._id
        })
      }} >
        <View style={{ flexDirection: 'row', padding: 10, alignItems: "center" }} >
          <View>
            <Image
              source={require("../assets/images/ProfilePicture.png")}
              resizeMode="contain"
              style={{
                borderRadius: 25, height: 40, width: 40,
              }}
            />
          </View>
          <View style={{ marginLeft: 12, wordWrap: "break-all", width: "85%" }}>
            <Text
              style={{
                fontSize: 14, color: "black", fontWeight: 'bold', textTransform: 'capitalize',
              }}>
              {'Full Name | And detailed information'}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "center", marginBottom: 50,  width: "100%"}} >
          <View style={{ marginLeft: 25, wordWrap: "break-all", width: "70%"}}>
            <Text
              style={{
                fontSize: 14, color: "black", fontWeight: 'bold', textTransform: 'capitalize',
              }}>
              {item.title}
            </Text>
          </View>
          <View style={{width: "30%"}}>
            <Image
              source={require("../assets/images/ArticleImage.png")}
              resizeMode="contain"
              style={{
                height: 70, width: 100,
              }}
            />
          </View>
        </View>
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
          keyExtractor={(item) => item._id}
        />}
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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  mainCardView: {
    height: 160,
    justifyContent: 'center',
    backgroundColor: "white",
    shadowColor: "shadow",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    elevation: 8,
    justifyContent: 'space-between',
  },
});
export default Home;
