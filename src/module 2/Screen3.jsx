import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { Avatar, Layout } from '@ui-kitten/components';
import { Box, Button, TextArea } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Screen3 = (props) => {
  const dataScreen4 = props.route.params.miObjetoNuevo
  const miObjetoNuevo = {
    ...dataScreen4,
    boolean_routine: 0,
    comments: ''
  }
  //  console.log(dataScreen4)
  const [buttonState, setButtonState] = useState(true)

  const [activado, setActivado] = useState(false)
  const [textAreaValue, setTextoIngresado] = useState('')

  const [botonSi, setBotonSi] = useState(false)
  const [botonNo, setBotonNo] = useState(false)

  const verificarSeleccion = () => {

    if (textAreaValue !== '') {
      setButtonState(false)
    } else {
      setButtonState(true)
    }
  }

  // console.log(textAreaValue + "cerdo");
  const ValueControllerTextInput = valor => {
    // console.log(valor)
    setTextoIngresado(valor);
  };
  miObjetoNuevo.comments = textAreaValue
  const navigation = useNavigation();

  const completoRutina = () => {
    let completado = 0
    if (botonSi === true) {
      completado = 1
    } else {
      completado = 0
    }
    miObjetoNuevo.boolean_routine = completado
  }

  useEffect(() => {
    verificarSeleccion()
  }, [textAreaValue])

  useEffect(() => {
    completoRutina()
    // console.log(miObjetoNuevo)
  })

  // console.log(botonSi);
  return (
    <>

      <ScrollView style={{ backgroundColor: "white"}}>
        <TemplateVersion2 />
        <Layout style={styles.container} level='1'>
          <View>
            <Text style={styles.tittlesStyle}>
              <Avatar
                shape={"square"}
                size='tiny'
                style={{ width: 10, height: 10 }}
                source={require('../../assets/icons/Rectangle_orange.png')}
              /> ¿Se completó la tarea rutinaria?
            </Text>
            <View style={styles.grupoSiRow}>
              <View style={styles.grupoSi}>
                <Button style={{ backgroundColor: botonSi ? "#56ff85" : "#ececec" }}
                  onPress={() => {
                    setBotonSi(true)
                    setBotonNo(false)
                  }}>
                  SI
                </Button>
              </View>
              <View style={styles.grupoNoDirection}></View>
              <View style={styles.grupoNo}>
                <Button style={{ backgroundColor: botonNo ? "#ff4e4e" : "#ececec" }}
                  onPress={() => {
                    setBotonNo(true)
                    setBotonSi(false)
                  }}>
                  NO
                </Button>
              </View>
            </View>

          </View>
        </Layout>

        <>
          <Layout style={styles.container} level='1'>
            <Text style={styles.tittlesStyle}>
              <Avatar
                shape={"square"}
                size='tiny'
                style={{ width: 10, height: 10 }}
                source={require('../../assets/icons/Rectangle_orange.png')} />
              <Text>
                {
                  botonSi ? '  Comentarios: ' : '  Justificación/Observaciones'
                }
              </Text>

            </Text></Layout>
          <Box alignItems="center" w="100%">
            <TextArea placeholder="Escribe aqui..." value={textAreaValue} onChangeText={(valor) => ValueControllerTextInput(valor)} w="75%" maxW="300" />
          </Box>

        </>

        <View style={{ justifyContent: 'center' }}>
          <View style={{ alignSelf: 'center', marginTop: "40%" }}>
            <Button style={[styles.button, {
              backgroundColor: '#01286B',
            }, { color: 'white' }, { marginBottom: 25 }]} onPress={() => { navigation.goBack() }}>
              Atrás
            </Button>
            <Button style={[styles.button, {
              backgroundColor: buttonState ? '#ECECEC' : '#01286B'
            }]} disabled={buttonState} onPress={() => { navigation.navigate('Screen4', { miObjetoNuevo }) }}>
              Siguiente
            </Button>
          </View>
        </View>
       
      </ScrollView>
      <View style={{ backgroundColor: 'white'}}>
        <View style={{ alignSelf: 'center', width: 90, height: 30, borderRadius: 40, margin: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECECEC', borderRadius: 40, }}>
          <Text style={{ color: '#01286B', textAlign: 'center', fontSize: 14 }}>
            Pág. 3 / 4
          </Text>
        </View>
      </View>
    </>
  );
};

export default Screen3;


const styles = StyleSheet.create({
  tittlesStyle: {
    fontSize: 15,
    color: '#01286B',
  },
  container: {
    justifyContent: 'center',
    margin: 30,
    marginBottom: 15
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // filter: 'grayscale(100%)',

    width: 100,
    height: 100,
  },
  grupoSi: {
    width: "30%",
    marginLeft: 50,
    marginBottom: 10
  },
  buttonSi: {
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 14,
    justifyContent: "center",
    flex: 1
  },
  opciones: {
    color: "rgba(161,161,161,1)",
    fontSize: 30,
    alignSelf: "center"
  },
  grupoNoDirection: {
    flex: 1,
  },
  grupoNo: {
    width: "30%",
    marginRight: 50,
  },
  buttonNo: {
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 14,
    justifyContent: "center",
    flex: 1
  },
  grupoSiRow: {
    height: 76,
    flexDirection: "row",
    marginTop: 20,
    marginRight: 2
  },
  button: {
    borderRadius: 40,
    width: 200,
    height: 42,
    backgroundColor: '#01286B'
  },
});