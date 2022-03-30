
import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import { ScrollView } from 'native-base';

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
            style={{ width: 300, height: 550}}
                visible={props.visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={props.onClose}>
                <ScrollView>
                    <Card disabled={true}>

                        {
                            todeArray.map((obj, index) => {
                                // console.log(obj)
                                return (

                                    <Text key={index}> {props.objetoIdParaModal}.{index + 1} {obj.name}</Text>
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
});

