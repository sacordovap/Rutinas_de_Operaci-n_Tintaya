import { StyleSheet, FlatList, Text, View, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Box, HStack, ScrollView, Spacer, VStack } from 'native-base';
import { Avatar, Button, Layout } from '@ui-kitten/components';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { tareaRutinariasOpcionesBd } from '../services/areasLista';
import ItemScreen2 from './ItemScreen2';
import NextButton from '../module 1/NextButton';
import { useNavigation } from '@react-navigation/native';
import Paginator from '../module 1/Paginator';

const Screen2 = (props) => {
  const dataScreen4 = props.route.params.dataScreen4
  const miObjetoNuevo = {
    ...dataScreen4,
    bothPerson: 0,
    frequency: 0
  }
  // console.log("SOY EL SCREEN 2-> ");
  // console.log(props);
  // console.log(miObjetoNuevo);
  // console.log(props.route.params.value);
  // console.log(props.route.params.midataParaObjetoScreen2);
  const soyLaTarea = props.route.params.value
  let soyElObejtoTarea = [props.route.params.midataParaObjetoScreen2]
  const [tareasOpciones, setTareasOpciones] = useState([])
  const traerTareasOpciones = () => {
    setTareasOpciones(soyElObejtoTarea)
  }
  useEffect(() => {
    traerTareasOpciones()
  }, [])
  // console.log(tareasOpciones)
  // console.log(props)
  //Propio tema, estilos, etc
 

  return (
    <>


      <Layout style={styles.container} level='1'>

        <View style={{ justifyContent: 'center' , marginTop: 20 }}>
          {/* <Text style={styles.tittlesStyle}>
            <Avatar
              shape={"square"}
              size='tiny'
              style={{ width: 10, height: 10 }}
              source={require('../../assets/icons/Rectangle_orange.png')}
            />
            Número de Personas que realizan la actividad
          </Text> */}
          <FlatList
            ListHeaderComponent={
              <>
                <View style={{marginTop:15}}><TemplateVersion2 /></View>
                <Text style={[styles.tittlesStyle, { textAlign: 'center' }]}>
                  {(dataScreen4.areaNombre).toUpperCase() + " > " + (dataScreen4.subProcesoNombre).toUpperCase()}
                </Text>
              </>} showsHorizontalScrollIndicator={false} data={tareasOpciones} renderItem={({ item }) =>
                <ItemScreen2 item={item} miObjetoNuevo={miObjetoNuevo} />

              }
            keyExtractor={item => item.id} />

          <View style={{ backgroundColor: 'white', marginBottom: '15%' }}>
            <View style={{ alignSelf: 'center', width: 90, height: 30, borderRadius: 40, margin: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECECEC', borderRadius: 40, }}>
              <Text style={{ color: '#01286B', textAlign: 'center', fontSize: 14 }}>
                Pág. 2 / 4
              </Text>
            </View>
          </View>
        </View>

      </Layout>

    </>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    width: 200,
    height: 42,
    backgroundColor: '#01286B',
    borderColor: 'transparent'
  },
  container: {
    justifyContent: 'center',   
    backgroundColor: 'white'
  },
  tittlesStyle: {
    fontSize: 16,
    color: '#01286B',
    fontWeight: '400',
    margin: 20
  },
});