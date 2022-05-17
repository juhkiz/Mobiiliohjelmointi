import { StyleSheet, Text, View } from 'react-native';
import { Card } from "react-native-elements";
import React from 'react';

export default function HomeScreen() {

  return (
    <View>
          <Card>
            <Card.Title>Welcome to CryptoApp!</Card.Title>
            <Card.Divider />
            <View style={{
              position: "relative",
              alignItems: "center"
            }}>
              <Text>On this application you can find crypto values and calculate your portfolios worth</Text>
            </View>
          </Card>
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0ccc3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});