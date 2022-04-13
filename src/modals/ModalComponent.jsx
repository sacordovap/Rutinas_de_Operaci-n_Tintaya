
import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Modal, Text } from '@ui-kitten/components';
import { Icon, ScrollView } from 'native-base';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const ModalComponent = (props) => {
    //  console.log(props)

    // const containerStyle = { backgroundColor: 'white', padding: 20 };

    // return (
    //     <Provider>

    //         <Modal visible={props.visible} onDismiss={props.onClose} contentContainerStyle={containerStyle}>
    //             <Text>{props.id}</Text>
    //         </Modal>

    //     </Provider>
    // );
    let todeArray = props.objetoParaModal
    let miArrayModal = []



    return (
        <View style={styles.container}>

            <Modal
                style={{ width: 300, height: 550 }}
                visible={props.visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={props.onClose}>
                <ScrollView>
                    <Card disabled={true}>
                        <Text style={styles.titleStyle}>
                            <Avatar
                                shape={"square"}
                                size='tiny'
                                style={{ width: 10, height: 10 }}
                                source={require('../../assets/icons/Rectangle_orange.png')} />
                            <Text>    </Text>
                            SUBTAREAS</Text>


                        {
                            todeArray.map((obj, index) => {
                                // console.log(obj)
                                return (
                                    <>
                                        <Text style={{ marginVertical: 5, textAlign: 'justify' }}>

                                            {props.objetoIdParaModal}.{index + 1}
                                            <Text style={{ textAlign: 'justify' }} key={index}> {obj.name}</Text>

                                        </Text>
                                    </>
                                )
                            })
                        }
                    </Card>
                </ScrollView>
                <Button onPress={
                    props.onClose}>
                    Cerrar
                </Button>
            </Modal>


        </View>
    );
}

export default ModalComponent
const styles = StyleSheet.create({
    container: {
        minHeight: 192,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    titleStyle: {
        fontSize: 17,
        color: '#01286B',
        fontWeight: '600',
        marginVertical: 10,
    }
});

