import { StyleSheet, Text, View, Animated, useWindowDimensions } from 'react-native';
import React from 'react';

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={{ flexDirection: 'row', height: 30, borderRadius:40, margin:15}}>
            {
                data.map((item, index) => {
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 70, 0],
                        extrapolate: 'clamp'
                    })
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })
                    return <Animated.View style={[
                        styles.dot,  
                        {
                            width: dotWidth,
                            height: 20,
                            opacity,
                            borderRadius:40,
                            textAlign: 'center'
                        }
                    ]} key={index}>
                        <Text style={{ color: '#01286B', textAlign:'center', backgroundColor: '#ECECEC', borderRadius:40, fontSize:14 }}>
                            Pág. {index + 1} / {data.length}
                        </Text>
                    </Animated.View>
                })
            }
        </View>
    );
};

export default Paginator;

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: "#493d8a",
        marginHorizontal: 8
    }
});
