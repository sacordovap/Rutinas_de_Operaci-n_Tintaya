import { FlatList, StyleSheet, Text, View, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import slides from './slides';
import ContenedorItem from './ContenedorItem';
import Paginator from './Paginator';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import { ScrollView } from 'native-base';

const ContenedorScreens = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({
        viewAreaCoveragePercentThreshold: 50
    }).current;

    const scrollToNext = () => {

        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
        } else {
            console.log("Cerdo")
        }
    }
    const scrollToBack = () => {
        if (currentIndex <= slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex - 1 })
        } else {
            console.log("CerdoBack")
        }
    }

    return (
        <>
        
            <View style={styles.container}>
                <View style={{ flex: 3 }}>
                    <ScrollView>
                        <FlatList
                            data={slides}
                            renderItem={({ item }) => <ContenedorItem item={item} />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            bounces={false}
                            keyExtractor={(item) => item.id}
                            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                                useNativeDriver: false,
                            })}
                            scrollEventThrottle={32}
                            onViewableItemsChanged={viewableItemsChanged}
                            viewabilityConfig={viewConfig}
                            ref={slidesRef}
                        />
                    </ScrollView>
                </View>
                {currentIndex !== 0 ? <PrevButton scrollToBack={scrollToBack} /> : null}
            <NextButton scrollToNext={scrollToNext} />
            
                <Paginator data={slides} scrollX={scrollX} />
               
            </View >
        </>
    );
};

export default ContenedorScreens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FFFFFF'
    },
});
