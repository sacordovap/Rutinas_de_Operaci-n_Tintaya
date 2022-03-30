import { Button, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';

const PrevButton = ({ scrollToBack }) => {
    return (
        <TouchableHighlight
            style={styles.submit}
            onPress={scrollToBack}
            underlayColor='#fff'>
            <Text style={[styles.submitText]}>Atrás</Text>
        </TouchableHighlight>
    );
};

export default PrevButton;

const styles = StyleSheet.create({

    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#01286B',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    }
});