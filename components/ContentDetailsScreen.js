import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";

const ContentDetails = ({ navigation, route }) => {
  // const itemId = navigation.getParam("itemId");
  // console.log(itemId);

  const [state, setState] = useState({ data: {}, status: "Idle", error: null });

  useEffect(() => {
    console.log("UseEffect called");
    getContentDetails();
  }, []);

  async function getContentDetails(props) {
    console.log("Inside Function:" + id);
    const body = {
      dataSource: "Cluster0",
      database: "articles",
      collection: "fs.files",
      filter: {
        author: "Sanaea C. Rose,Smadar Naoz,Re’em Sari,and Itai Linial",
      },
    };
    setState({ ...state, status: "loading" });
    await fetch(
      "https://data.mongodb-api.com/app/data-cijfe/endpoint/data/v1/action/findOne",
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
      .then(
        (responseJson) => 
          setState({
            data: responseJson.documents,
            status: "resolved",
            error: null,
          })
      )
      .catch((error) => setState({ data: {}, status: "error", error: error }));
  }

  // const renderItem = ({ item }) =>
  //   item.title !== "" ? (
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{item.title}</Text>
  //     </View>
  //   ) : null;

  return (
    <SafeAreaView style={styles.container}>
      {state.status === "loading" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          <Text>{route.params?.itemId}</Text>
        </View>
      )}
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
});

export default ContentDetails;
