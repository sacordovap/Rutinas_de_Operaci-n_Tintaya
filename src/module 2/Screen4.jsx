import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import { Avatar, Button, Layout } from '@ui-kitten/components';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { useNavigation } from "@react-navigation/native";
import AwesomeAlert from 'react-native-awesome-alerts';
import AnimatedLoader from "react-native-animated-loader";
import { postCreateData } from '../services/services';

const Rectangle_orange = require('../../assets/icons/Rectangle_orange.png')
const loader = require('../../assets/loaders/waiting.json')
import MarqueeText from 'react-native-marquee';
import { Col, Row, Grid } from 'react-native-easy-grid';
import TextTicker from 'react-native-text-ticker';

const Screen4 = (props) => {
  const dataScreen4 = props.route.params.miObjetoNuevo

  const dataRutina = {
    boolean_routine: dataScreen4.boolean_routine,
    comments: dataScreen4.comments,
    frequency: dataScreen4.frequency,
    area_id: dataScreen4.areaId,
    process_id: dataScreen4.processId,
    task_id: dataScreen4.taskId,
    both_person: dataScreen4.bothPerson,
  }


  const handleSubmit = () => {
    startLoader()
    postCreateData(dataRutina).then((rpta) => {
      // console.log(dataRutina)
      // console.log("Mir respuesta")
      // console.log(rpta)

      if (rpta.status === 200) {
        setVisible(false)
        navigation.navigate('Save')

      } else {
        console.warn("Subida errÃ³nea")
        setVisible(false)
      }
    }).catch(err => {
      // console.log("ERROR EN EL SERVICIO CREARDATA")
      setVisible(false)
      // console.warn(err)
    })

  }

  // console.log(dataRutina)
  const navigation = useNavigation();


  const [Estado, setEstado] = useState(false);
  const showAlert = () => {
    setEstado(true);
  };
  const hideAlert = () => {
    setEstado(false);
  };
  const porcentaje = (((dataScreen4.cantTareasCompletas + dataScreen4.boolean_routine) * 100) / dataScreen4.cantTareasSubproceso).toFixed(2)


  const [variableColor, setVariableColor] = useState("#FFFFFF")

  const verificarPorcentaje = () => {
    if (porcentaje >= 0 && porcentaje < 25) {
      setVariableColor("#FF0000")
    }
    if (porcentaje >= 25 && porcentaje < 50) {
      setVariableColor("#FF7000")
    }
    if (porcentaje >= 50 && porcentaje <= 75) {
      setVariableColor("#FFE400")
    }
    if (porcentaje >= 75 && porcentaje <= 100) {
      setVariableColor("#32FF00")
    }
  }
  // console.log(variableColor)
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      setVariableColor('#FFFFFF')
      verificarPorcentaje()
    }, 1000);
  };

  useEffect(() => {
    startLoading()
    verificarPorcentaje()
  }, [])
  const [loading, setLoading] = useState(false);

  const [buttonState, setButtonState] = useState(true)


  //loader

  const [visible, setVisible] = useState(false);

  const startLoader = () => {
    setVisible(true)
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <TemplateVersion2 />
        <Layout style={styles.container} level=''>

          {/*Nueva tabla que si funciona*/}
          <View style={styles.containerGrid}>
            <Grid>
              <Row >
                <Col style={styles.cellHeader}>
                  <Text style={{ color: '#ffffff', fontSize: 16 }} >RESUMEN DE LAS TAREAS REALIZADAS</Text>
                </Col>
              </Row>
              <Row >
                <Col
                  style={[styles.cell, { flex: 1.6 }]}>
                  <Text
                    style={[styles.tittlesStyle, { color: '#01286b', fontSize: 13 }]}

                  ><Avatar
                    shape={"square"}
                    size={"tiny"}
                    style={{ width: 10, height: 10 }}
                    source={Rectangle_orange} >
                    </Avatar> AREA</Text></Col>
                <Col
                  style={styles.cell2}>
                  <Text style={[styles.tittlesStyle, { color: '#01286b', fontSize: 12, textAlign: 'center' }]}>
                    {dataScreen4.areaNombre}
                  </Text>
                </Col>
              </Row>
              <Row >
                <Col
                  style={[styles.cell, { flex: 1.6 }]}>
                  <Text style={[styles.tittlesStyle, { color: '#01286b', fontSize: 13 }]}>
                    <Avatar
                      shape={"square"}
                      size={"tiny"}
                      style={{ width: 10, height: 10 }}
                      source={Rectangle_orange} >
                    </Avatar> SUB PROCESO</Text></Col>
                <Col
                  style={styles.cell2}>
                  <Text style={[styles.tittlesStyle, { color: '#01286b', fontSize: 12, textAlign: 'center' }]}>
                    {dataScreen4.subProcesoNombre}
                  </Text></Col>
              </Row><Row >
                <Col
                  style={[styles.cell, { flex: 1.6 }]}>
                  <View style={[{ flexDirection: 'row', alignItems: 'center', marginRight: 5 }]}>
                    <Avatar
                      shape={"square"}
                      size={"tiny"}
                      style={{ width: 10, height: 10 }}
                      source={Rectangle_orange} >
                    </Avatar><Text style={{ color: '#01286b', fontSize: 12, marginLeft: 5 }}>CANTIDAD DE TAREAS DEL SUBPROCESO</Text></View></Col>
                <Col
                  style={styles.cell2}>
                  <Text style={[styles.tittlesStyle, { color: '#01286b', fontSize: 15 }]}>
                    {dataScreen4.cantTareasSubproceso}
                  </Text></Col>
              </Row>
              <Row >
                <Col
                  style={[styles.cell, { flex: 1.6 }]}>
                  <View style={[{ flexDirection: 'row', alignItems: 'center', marginRight: 5 }]}>
                    <Avatar
                      shape={"square"}
                      size={"tiny"}
                      style={{ width: 10, height: 10 }}
                      source={Rectangle_orange} >
                    </Avatar><Text style={{ color: '#01286b', fontSize: 12, marginLeft: 5 }}> HORAS TOTALES DE TURNO POR PERSONA</Text></View></Col>
                <Col
                  style={styles.cell2}>
                  <Text style={[styles.tittlesStyle, { color: '#01286b', fontSize: 16 }]}>
                    {(dataScreen4.horasTotalesSubproceso).toFixed(2)  }
                  </Text></Col>
              </Row><Row >
                <Col
                  style={[styles.cell, { flex: 1.6 }]}>
                  <View style={[{ flexDirection: 'row', alignItems: 'center', marginRight: 5 }]}>
                    <Avatar
                      shape={"square"}
                      size={"tiny"}
                      style={{ width: 10, height: 10 }}
                      source={Rectangle_orange} >
                    </Avatar><Text style={{ color: '#01286b', fontSize: 12, marginLeft: 5 }}> % DE CUMPLIMIENTO DE TAREAS DEL SUB PROCESO</Text></View></Col>
                <Col
                  style={[styles.cell2, { backgroundColor: variableColor }]}>
                  {
                    loading ?
                      <ActivityIndicator
                        //visibility of Overlay Loading Spinner
                        visible={loading}
                        //Text with the Spinner
                        size="small"
                        color="#01286b"
                        //Text style of the Spinner Text
                        textStyle={styles.spinnerTextStyle}
                      /> :
                      <Text style={[{ color: porcentaje < 50 ? 'white' : '#01286b', fontSize: 16 }]}>
                        {porcentaje}%
                      </Text>
                  }
                </Col>
              </Row>
            </Grid>
          </View>


          <View style={{ justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{ alignSelf: 'center', marginTop: '45%' }}>
              <Button style={[styles.button, {
                backgroundColor: '#01286B',
              }, { color: 'white' }, { marginBottom: 25 }]}
                onPress={() => { navigation.goBack() }}
              >
                Atrás
              </Button>
              <Button style={[styles.button, {
                backgroundColor: '#ea3e18',
              }, { color: 'white' }, { marginBottom: 15 }]}
                onPress={() => showAlert()}
              >
                Guardar
              </Button>
              <AwesomeAlert
                show={Estado}
                showProgress={false}
                title="Iniciando Guardado"
                titleStyle={{ fontSize: 22, marginBottom: 10 }}
                messageStyle={{ fontSize: 18, marginBottom: 10 }}
                message="Esta seguro de guardar?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No"
                confirmText="Si"
                cancelButtonStyle={{ width: 100, alignItems: 'center', marginTop: 10 }}
                confirmButtonStyle={{ width: 100, alignItems: 'center' }}
                confirmButtonColor="#AEDEF4"
                cancelButtonColor="#DD6B55"
                onCancelPressed={() => {
                  hideAlert();
                }}
                onConfirmPressed={() => {
                  handleSubmit();
                  hideAlert();
                }} />
            </View>



          </View>
        </Layout>
        <AnimatedLoader
          visible={visible}
          overlayColor="white"
          animationStyle={styles.lottie}
          source={loader}
          speed={1}>
          <Text>Guardando Datos</Text>
        </AnimatedLoader>


      </ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ alignSelf: 'center', width: 90, height: 30, borderRadius: 40, margin: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECECEC', borderRadius: 40, }}>
          <Text style={{ color: '#01286B', textAlign: 'center', fontSize: 14 }}>
            Pág. 4 / 4
          </Text>
        </View>
      </View>
    </>
  );
}

export default Screen4;

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  }, Container: {
    paddingTop: 20,
  },
  container: {
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'white'
  },
  containerGrid: {
    width: '100%',
    height: 300,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: 40,
    width: 200,
    height: 42,
    backgroundColor: '#01286B',
    borderColor: 'transparent'
  },
  cell: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#01286b',
    justifyContent: 'center',
    paddingLeft: 10,
    flex: 1,
  },
  cell2: {
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#01286b',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cellHeader: {
    backgroundColor: '#01286b',
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    borderColor: '#01286b',
    flex: 1,
  },
});