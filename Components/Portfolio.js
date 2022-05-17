import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Card, Button, Input } from "react-native-elements";
import * as SecureStore from "expo-secure-store";

export default function Portfolio() {

    const [cryptoName, setCryptonName] = useState('')
    const [cryptoAmount, setCryptoAmount] = useState('0')

    const [portfolio, setPortfolio] = useState([{
        crypto: '',
        amount: '0'
    }])

    async function testfunc() {
        await SecureStore.setItemAsync("portfolio", JSON.stringify(portfolio));
      }
    
      async function getValueFor() {
        let portfolio = await SecureStore.getItemAsync("portfolio");
        setPortfolio(JSON.parse(portfolio));
      }

    function handlePortfolio() {
        const updatePortfolio = [
            ...portfolio,
            {
                crypto: cryptoName,
                amount: cryptoAmount
            }
        ];
        setPortfolio(updatePortfolio);

        setCryptoAmount(0)
        setCryptonName('')
    }

    return (
        <View>
            <Card>
                <Card.Title>Welcome to your Portfolio!</Card.Title>
                <Card.Divider />
                <View style={{
                    position: "relative",
                    alignItems: "center"
                }}>
                    <Text>Insert crypto currency and the amount</Text>
                    <Input
                        containerStyle={{}}
                        disabledInputStyle={{ background: "#ddd" }}
                        inputContainerStyle={{}}
                        placeholder="Enter crypto"
                        value={cryptoName}
                        onChangeText={number => setCryptonName(number)}
                    />
                    <Input
                        containerStyle={{}}
                        disabledInputStyle={{ background: "#ddd" }}
                        inputContainerStyle={{}}
                        placeholder="Enter amount"
                        value={cryptoAmount}
                        onChangeText={number => setCryptoAmount(number)}
                    />
                    <Button
                        style = {styles.button}
                        title="Add"
                        onPress={() => handlePortfolio()}
                    />
                    <Button
                        style = {styles.button}
                        title= "Save portfolio"
                        onPress={testfunc}
                    />
                    <Button
                        style = {styles.button}
                        title= "Import saved portfolio"
                        onPress={getValueFor}
                    />
                </View>
            </Card>
            <Card>
                <Text>Your portfolio</Text>
                {portfolio.map((item) => (
                    <Text key = {item.crypto}>{item.crypto}  {item.amount}</Text>
                ))}

            </Card>
        </View>)
}

const styles = StyleSheet.create({
    button: {
      marginBottom: 5,
      padding: 5
    },
    space: {
      width: 20, 
      height: 20,
    },
  })