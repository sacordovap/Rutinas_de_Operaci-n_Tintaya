import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Layout } from '@ui-kitten/components'
import TemplateVersion2Oscuro from '../Template/TemplateVersion2Oscuro'
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'native-base'

const ScreenSave = () => {
    const [buttonState, setButtonState] = useState(false)
    const navigation = useNavigation();
    return (
        <>
            <ScrollView style={[styles.Container]} >
                <TemplateVersion2Oscuro />
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="rgba(200, 200, 200, 0.29)" translucent={true} animated={true} />

                <Layout style={[styles.container, { backgroundColor: '#01286b' }]} level='1'>
                    <View style={
                        {
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#01286b', marginTop: "60%"
                        }}>
                        <Avatar
                            shape={"square"}
                            size='giant'
                            style={{ width: 52.5, height: 52.5 }}
                            source={require('../../assets/icons/Icono_guardar.png')} />
                        <Text style={[styles.tittlesStyle, { color: 'white', fontSize: 22 }]}>
                            GUARDADO
                        </Text>
                        <Icon
                            name="check-circle"
                            style={styles.iconCheck}
                        ></Icon>
                    </View>
                    <View style={{ justifyContent: 'center', backgroundColor: '#01286b' }}>
                        <View style={{ alignSelf: 'center', marginTop: '60%' }}>
                            <Button style={[styles.button, {
                                backgroundColor: 'white',
                            }, { marginBottom: 25 }]}
                                onPress={() => navigation.replace('Home')}
                            >
                                <Text style={{ color: '#EA3E18', fontSize: 16 }}>FINALIZAR</Text>
                            </Button>
                        </View>
                    </View>
                </Layout>
            </ScrollView></>
    )
}
    
export default ScreenSave

const styles = StyleSheet.create({
    Container: {
        paddingTop:10,
        backgroundColor: '#01286b',
    },
    container: {
        justifyContent: 'center',
        margin: 20,
    },
    button: {
        borderRadius: 40,
        width: 200,
        height: 42,
        backgroundColor: '#01286B'
    },
    iconCheck: {
        color: "rgba(255,255,255,1)",
        fontSize: 25,
    }
})