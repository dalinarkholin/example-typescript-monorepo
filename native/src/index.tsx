import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import core from "~/core";
import infrastructure from "~/infrastructure";

class App extends React.Component {
  render() {
    return (
      <View style={theme.container}>
        <Text>Hello Native World!</Text>
        <Text>{core}</Text>
        <Text>{infrastructure}</Text>
      </View>
    );
  }
}

const theme = StyleSheet.create(
  {
    container: {
      alignSelf: "center",
      flex: 1,
      marginTop: 200,
    },
  });

export default App;
