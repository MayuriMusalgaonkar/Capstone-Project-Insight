import React, {useEffect, useState} from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar, FlatList, View } from 'react-native';

const ArticleList = () => {
console.log("Article List ");

const [state, setState] = useState({data: {}, status: 'Idle', error:null});

useEffect(()=>{
  console.log("UseEffect called");
  getArticleList();
},[]);

async function getArticleList() {

  setState({...state, status: 'loading'});
  await fetch('https://data.mongodb-api.com/app/data-cijfe/endpoint/data/v1/action/find',{
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'zvvB0sCTMCMkkVTJ2hzJsxklizL0IJcp2pZ0yKmGk4AGGQfd3va03166ErC1miIU'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  })
  .then((resp) => resp.json())
  .then((responsejson) => setState({data: responsejson.Search, status: 'resolved', error:null}))
  .catch((error) => setState({data:{},status:'error',error:error}));
  
}

const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.Title}</Text>
    </View>
);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
            data={state.data}
            renderItem={renderItem}
            keyExtractor={item => item.imdbID}
            />
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
      text: {
        fontSize: 42,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    });
    


export default ArticleList;