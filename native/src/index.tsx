import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import test from "~/core";
alert(test);

class App extends React.Component {
  render() {
    return (
      <View style={theme.container}>
        <Text>Hello World!</Text>
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
