import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';
import { Button } from '@ui-kitten/components';

const NextButton = ({ scrollToNext, buttonState }) => {
    return (
        <Button
            onPress={scrollToNext}
            underlayColor='#fff'>
            <Text style={[styles.submitText]}>Siguiente</Text>
        </Button>
    );
};

export default NextButton;

const styles = StyleSheet.create({

    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    }
});
