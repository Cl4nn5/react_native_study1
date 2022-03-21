import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from "react-native";
// import { Component, useState } from "react/cjs/react.development";
import { Component, useState } from "react";

const DATA = [
  {
    id: 0,
    name: "세면",
    isClear: false,
  },
  {
    id: 1,
    name: "공부",
    isClear: true,
  },
  {
    id: 2,
    name: "수면",
    isClear: false,
  },
];


// const setIsClear = () => { console.log(isClear); return isClear = !isClear }





export default function App() {
  console.log("render server");

  const [clearArr, setClearArr] = useState(DATA);

  function settingClearArr(idx) {
    DATA[idx].isClear = !DATA[idx].isClear;
    setClearArr([...DATA]);
  }

  const Item = ({ id, name, isClear }) => (
    <View style={styles.containerBox}>
      <Button title={name} color={isClear ? 'green' : 'blue'} onPress={() => settingClearArr(id)}/>
    </View>
  );
  const renderItem = ({item}) => (
    <Item id={item.id} name={item.name} isClear={item.isClear}/>
  )
    
  class TodoList extends Component {
    
    render() {
      return (
        <FlatList 
          style={{ width: '40%', alignSelf:'center',}}
          data={clearArr}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>내가 해야 할 일</Text>
      <ImageBackground source={require("./assets/icon.png")} style={styles.ImageBackground} resizeMode="stretch">
        <TodoList/>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#aaa",
  },
  whiteText: {
    color: "#ffffff",
  },
  center: {
    justifyContent: "center",
    alignSelf: "center",
  },
  strongFont: {
    fontSize: 30,
    fontWeight: "bold",
  },
  red: {
    color: "red",
  },
  ImageBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    zIndex: 9000,
  },
  containerBox: {
    flex: 1,
    width: '100%',
  },
  item: {
    backgroundColor: '#f9c2ff',
    color: 'black',
    padding: 20,
    marginVertical: '10%',
    marginHorizontal: 13,
    textAlign: 'center',
  },
});
