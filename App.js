// 공식문서보고 따라하고 응용하기!
import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { useState } from "react/cjs/react.development";
import log4app from "./components/log4app";

const Product = ({ idx, product = "Product", getIsNeed = false }) => {
  const [isNeed, setIsNeed] = useState(false); // default

  return (
    <View style={productStyle.container}>
      <Text>
        <Text style={productStyle.centerCenter}>
          I'm {product} : key = {idx}
        </Text>
        <Button
          title={isNeed ? "필요해" : "필요 없어"}
          onPress={() => {
            setIsNeed(!isNeed); // state update
          }}
          // disabled={!isNeed}
        />
      </Text>
    </View>
  );
};

const App = () => {
  log4app("Render Server");
  const [msg, setMsg] = useState("hi");

  return (
    <View style={mainStyle.container}>
      <Image
        style={mainStyle.img_cat}
        source={require("./assets/adaptive-icon.png")}
      />
      <TextInput
        style={mainStyle.textInputBox}
        defaultValue={msg}
        onBlur={(e) => {
          setMsg(e.target.value);
        }}
        onEndEditing={(e) => {
          setMsg(e.target.value);
        }}
        placeholder="what do you want?"
      ></TextInput>
      <Text>{msg}</Text>
      <Image
        style={mainStyle.img_cat}
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
      />
      <Product idx={0} />
      <Product idx={1} product={"apple"} />
      <Product idx={2} product={"banana"} />
      <Product idx={3} product={"car"} />
    </View>
  );
};

export default App;

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  textBox: {
    color: "green",
    justifyContent: "space-between",
  },
  textInputBox: {
    width: "50%",
    color: "#FF7F00",
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
  },
  img_cat: {
    width: 200,
    height: 100,
  },
  centerCenter: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "black",
    color: "white",
  },
});

const productStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centerCenter: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "black",
    color: "white",
  },
});

/*
  TODOs : function style
  uri: https://reactnative.dev/docs/intro-react
  * 1. View
  * 2. Text
  * 2-1. StyleSheet
  * 2-2. TextInput
  * 3. import & export js
  * 4. CustomComponents
  * 4-1. props : 1, n, default
  * 5. useState
  * 5-1 setState
 */
