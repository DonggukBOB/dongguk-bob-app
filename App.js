import React from "react";
import { StyleSheet, View } from "react-native";
import { Constants } from "react-native-unimodules";
import WebView from "react-native-webview";

export default function App() {
  return (
    <>
      <View style={styles.statusBar} />
      <WebView
        source={{ uri: "https://donggukbob.github.io/dongguk-bob/" }}
        style={styles.container}
      />
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "#f29300",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
