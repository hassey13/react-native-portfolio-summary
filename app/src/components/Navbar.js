import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 50,
        borderColor: '#ccc',
        borderBottomWidth: 1,

        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
