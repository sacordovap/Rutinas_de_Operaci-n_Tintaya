import { StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native';
import React from 'react';

const ContenedorItem = ({ item }) => {
    const { width } = useWindowDimensions()

    return (

        <View style={styles.container, { width }}>
            <View>
                {
                    item.component
                }
            </View>
        </View>
    );
};

export default ContenedorItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    }
});
