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
  await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
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