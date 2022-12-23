import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';




const HomeScreen = ({navigation , route}) => {
    const [text, onChangeText] = useState("");
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder = "Anything"
            />
            <Button title='Submit' onPress={()=>{navigation.navigate('Profile',{
                 data: text,
            })}}></Button>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});

export default HomeScreen;
