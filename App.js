import React from 'react';
import { StyleSheet } from 'react-native';
import WebView from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{uri: "https://donggukbob.github.io/dongguk-bob/"}}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
