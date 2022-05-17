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
          <Text>On this application you can find crypto values and create simple portfolio</Text>
        </View>
      </Card>
      <Card>
        <Card.Title>About this project</Card.Title>
        <Card.Divider />
        <View style={{
          position: "relative",
          alignItems: "center"
        }}>
          <Text>
            This project was created as part of Mobiiliohjelmointi course.
            The main purpose of this porject was to study basics of mobiledevelopment with React Native and Expo
            </Text>
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