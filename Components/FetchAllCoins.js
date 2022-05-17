import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Button, Image } from 'react-native';
import { Card } from "react-native-elements";
import { coinPictures } from './Pictures';

export default function Test() {

    const [coinData, setCoinData] = useState([])
    const [showInfo, setShowInfo] = useState(false)
    var data

    var requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    };
    useEffect(async () => {
        const response = await fetch("https://api.coincap.io/v2/assets", requestOptions);
        data = await response.json();
        setCoinData(data.data)
    }, [data])


    const listSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "80%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "10%"
                }}
            />
        );
    };

    
    if (coinData.length != 0) {
        return (
            <View style={styles.container}>
                <Button title="More Info" onPress={() => setShowInfo(!showInfo)} />
                <StatusBar hidden={true} />
                <FlatList
                    data={coinData}
                    style={{ marginLeft: "5%" }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <Card>
    
                            <Card.Title>
                                <Image
                                    style={{ width: 30, height: 30 }}
                                    source={{ uri: coinPictures[item.name]}}
                                />
                                {item.name}
                            </Card.Title>
                            <View>{showInfo ?
                                <Card>
                                    <Text style = {{fontWeight: 'bold'}}>Current Value: {parseFloat(item.priceUsd).toFixed(5)}${'\n'}</Text>
                                    <Text style = {{fontWeight: 'bold'}}>Marketcap: {parseFloat(item.marketCapUsd).toFixed(2)}${'\n'}</Text>
                                    <Text style = {{fontWeight: 'bold'}}>Current Symbol: {item.symbol}</Text>
                                </Card>
                                : null}</View>
                        </Card>}
                    ItemSeparatorComponent={listSeparator} />
            </View>
            
        )
    }
    else {
        return (<View><Text></Text></View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c0ccc3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});