import { StyleSheet, useWindowDimensions, View, Image, Animated, StatusBar } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { Card, Layout, Text, Avatar, Button, ButtonGroup, useTheme, Menu, MenuGroup, MenuItem, RadioGroup } from '@ui-kitten/components';
import { areasBd, subProcesosBd, tareaRutinariasBD } from '../services/areasLista';
import { Checkbox, Radio, ScrollView, Icon, Select } from 'native-base';
import { getAllAreas } from '../services/services';
import { AuthContext } from '../context/authState';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import ModalComponent from '../modals/ModalComponent';
import { useNavigation } from '@react-navigation/native';
import NextButton from '../module 1/NextButton';
import Paginator from '../module 1/Paginator';
import { ActivityIndicator } from 'react-native-paper';


const Screen1 = (props) => {
  let contador = 0
  const [areasData, setAreasData] = useState([]);
  const [subProcesos, setSubProcesos] = useState([])
  const [subProcesosPorId, setSubProcesosPorId] = useState([]);
  const [tareasRutinarias, setTareasRutinarias] = useState([])
  const [tareasRutinariasPorId, setTareasRutinariasPorId] = useState([])
  const [dataScreen4, setDataScreen4] = useState({
    areaNombre: '',
    areaId: 0,
    processId: 0,
    taskId: 0,
    subProcesoNombre: '',
    cantTareasSubproceso: 0,
    horasTotalesSubproceso: 0,
    cantTareasCompletas: 0
  })
  const width = useWindowDimensions().width

  const traerAreas = () => {
    startLoading()
    //Aquí obtener las áreas desde el servicio
    getAllAreas().then((rpta) => {
      // console.log(rpta)
      console.log(rpta.data.data)
      setAreasData(rpta.data.data)
      setLoading(false)
    })
  }
  const traerSubProcesos = () => {
    setSubProcesos(subProcesosBd)
  }
  const traerTareasRutinarias = () => {
    setTareasRutinarias(tareaRutinariasBD)
  }

  const [pintarImagen, setPintarImagen] = useState({
    // filter: 'grayscale(100%)'
  });

  const [esteEsMiId, setEsteEsMiId] = useState("");
  const [selected, setSelected] = useState(false);

  const cambiarColor = (idCard) => {
    setEsteEsMiId(idCard)
    const despintarOtros = areasData.map((obj, i) => {

      // console.log(idCard)

      if (idCard === obj.id) {
        return {
          ...obj,
          selected: true
        }
      }
      return {
        ...obj,
        selected: false
      }
    })
    // console.log(despintarOtros)
    setAreasData(despintarOtros)
  }
  const [estaEsMiArea, setEstaEsMiArea] = useState(0)
  useEffect(() => {
    traerAreas()
    traerSubProcesos()
    traerTareasRutinarias()
  }, []);
  const traerSubProcesosMetodo = (idCard) => {
    // console.log(idCard)
    // console.log(areasData[idCard-1])
    // const trayendo = areasData.find(function (e) {
    //   return e.idArea === idCard
    // })
    // console.log(idCard + "SEAW")
    const trayendo = areasData.find((e) => (e.id) === idCard)
    // console.log(trayendo.processes_complete)
    setSubProcesosPorId(trayendo.processes_complete)
    setEstaEsMiArea(trayendo.id)
    // console.log(estaEsMiArea)
  }

  const [prueba, setPrueba] = useState([])
  const onSelectIdArea = (idArea, index) => {
    console.log(index)
    console.log(subProcesosPorId)
    let dataFiltrada
    subProcesosPorId.forEach(element => {
      if (element.id == index) {
        dataFiltrada = element.tasks
      }
    })
    console.log(dataFiltrada)
    // let dataFiltrada = subProcesosPorId[index].tasks
    // console.log(dataFiltrada)
    setTareasRutinariasPorId(dataFiltrada)

  }


  const traerTareasRutinariasMetodo = (idCard) => {

    //  console.log('cerdo') 
    // const trayendoTareas = tareasRutinarias.find(function (e) {
    //   return e.idSubProcess === idCard
    // })
    // // console.log(trayendoTareas)
    // setTareasRutinariasPorId(trayendoTareas.tareasAll)
  }

  const [selectedIndex, setSelectedIndex] = useState(0);
  // console.log(selectedIndex)
  // const displayValue = subProcesosPorId[selectedIndex.row];
  // console.log(selectedIndex.row)

  const [displayValue, setDisplayValue] = useState('Seleccione un SubProceso')
  const [displayID, setDisplayID] = useState(0)

  const listarSubprocesos = (idSubProcess) => {
    console.log(idSubProcess)
    const subProcess = subProcesosPorId.find((e) => (e.id) == idSubProcess)
    console.log(subProcess)
    dataScreen4.horasTotalesSubproceso = subProcess.tasks_sum_person_turn
    setDisplayValue(subProcess.name)
    dataScreen4.subProcesoNombre = subProcess.name
    dataScreen4.processId = subProcess.id
    dataScreen4.cantTareasSubproceso = subProcess.tasks.length
    setPrueba(subProcess)
    setDisplayID(subProcess.id)
  }
  const [estadoCheck, setEstadoCheck] = useState(false)
  const MenuIcon = (props) => (
    estadoCheck ? <Icon {...props} name='square-outline' /> : <Icon {...props} name='checkmark-square-2-outline' />
  );
  const FlechasIcon = (props) => (
    estadoCheck ? <Icon {...props} name='arrowhead-down-outline' /> : <Icon {...props} name='arrowhead-up-outline' />
  );

  const renderOption = (title) => (
    //  traerTareasRutinariasMetodo(displayValue)
    // console.log(title),
    <Select.Item value={title.id} label={title.name} />
  );

  // checks
  const [groupValue, setGroupValue] = useState([]);

  // console.log('Se eligieron los siguientes checks' + groupValue)
  // console.log('Cantidad de casillas marcadas' + groupValue.length)

  //Propio tema, estilos, etc
  const [buttonState, setButtonState] = useState(true)

  const comprobarButtonState = () => {
    // console.log(groupValue)
    if (value != 0) {
      setButtonState(false)
    } else {
      setButtonState(true)
    }
  }

  const [selectedIndexMenu, setSelectedIndexMenu] = useState(null)
  const [value, setValue] = useState(0)
  useEffect(() => {
    comprobarButtonState()
  }, [value])

  const [objetoParaModal, setObjetoParaModal] = useState([])
  const [objetoIdParaModal, setObjetoIdParaModal] = useState(0)
  const [modalMoreData, setModalMoreData] = useState(false)
  const activarModalDataExtra = (obj, key) => {
    setObjetoParaModal(obj)
    setObjetoIdParaModal(key)
    setModalMoreData(true)
  }
  // console.log(value)
  const [midataParaObjetoScreen2, setMidataParaObjetoScreen2] = useState([])
  const miDataParaScreen2 = (objet) => {
    setMidataParaObjetoScreen2(objet)
  }
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {
    console.log(value)
  })


  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  };


  return (

    <><ScrollView style={{ backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      <Layout style={styles.container} level='1'>
        <TemplateVersion2 />
        <View>
          <Text style={styles.tittlesStyle}>
            <Avatar
              shape={"square"}
              size='tiny'
              style={{ width: 10, height: 10 }}
              source={require('../../assets/icons/Rectangle_orange.png')} />
            <Text>  </Text>ÁREA
          </Text>

          <ScrollView horizontal>
            {loading ? (
             
                <ActivityIndicator

                  //visibility of Overlay Loading Spinner
                  visible={loading}
                  //Text with the Spinner
                  size="small"
                  color="#f4c47c"
                  //Text style of the Spinner Text
                  textStyle={styles.spinnerTextStyle}
                />
            ) : (
              <>
                {areasData.map((obj, i) => {
                  return (

                    <Card key={obj.id} style={styles.card} onPress={() => {
                      traerSubProcesosMetodo(obj.id);
                      cambiarColor(obj.id);
                      setSelectedIndex(0);
                      setValue(0);
                      setDisplayValue('Seleccione un SubProceso');

                      dataScreen4.areaNombre = obj.name;
                      dataScreen4.areaId = obj.id;
                      dataScreen4.processId = 0;
                      dataScreen4.taskId = 0;
                      // console.log(obj)
                    }}>
                      <Avatar
                        style={[styles.logo,
                        {
                          opacity: obj.selected ? 1 : 0.3,
                        }
                        ]}

                        size='giant'
                        resizeMode="contain"
                        source={{ uri: obj.url_image }} />

                      <Text style={{ textAlign: 'center', maxWidth: 100, color: obj.selected ? '#01286B' : '#969696', fontSize: 14, fontWeight: "400", marginTop: 5 }}>
                        {obj.name}
                      </Text>
                    </Card>
                  );
                })}
              </>
            )}
          </ScrollView>

        </View>
        {/* View de los SubProcesos */}
        <View>
          <Text style={styles.tittlesStyle}>
            <Avatar
              shape={"square"}
              size='tiny'
              style={{ width: 10, height: 10 }}
              source={require('../../assets/icons/Rectangle_orange.png')} />
            <Text>  </Text>SUB PROCESO
          </Text>

          {/* <Select
            placeholder='Seleccione un SubProceso'
            value={displayValue}
            selectedIndex={selectedIndex}
            onSelect={(index, i) => {
              // console.log((index.row) + 1);
              setSelectedIndex(index);
              setValue(0);
              console.log("MI ROW ES");
              console.log(displayValue);
              listarSubprocesos(index.row)
              // if (estaEsMiArea === 1) {
              //   listarSubprocesos((index.row) + 1);
              // } else if (estaEsMiArea === 2) {
              //   listarSubprocesos((index.row) + 5);
              // } else if (estaEsMiArea === 3) {
              //   listarSubprocesos((index.row) + 14);
              // }
              traerTareasRutinariasMetodo((index.row) + 1);
              onSelectIdArea(estaEsMiArea, index.row);
              dataScreen4.taskId = 0;
            }}
          >
            {
              // console.log(subProcesosPorId),
              // subProcesosPorId.map((obj, index) =>{
              //   console.log(obj)
              //   renderOption(obj.name)
              // })
              subProcesosPorId.map((obj) => renderOption(obj))}
          </Select> */}

          <Select selectedValue={selectedIndex}

            _dark={{
              bg: "#F9F9F9"
            }}
            _light={{
              bg: "#F9F9F9"
            }}
            color="black"
            accessibilityLabel="-"

            placeholder="Seleccione un SubProceso"
            _selectedItem={{
              bg: "white"
            }} onValueChange={itemValue => {
              setSelectedIndex(itemValue)
              setValue(0)
              listarSubprocesos(itemValue)
              onSelectIdArea(estaEsMiArea, itemValue);
              dataScreen4.taskId = 0;
              console.log("Mi valor es:" + itemValue)
            }}>
            {
              subProcesosPorId.map((obj) => renderOption(obj))
            }

          </Select>

        </View>
        {/* View de las Tareas Rutinarias */}
        <View>
          <Text style={styles.tittlesStyle}>
            <Avatar
              shape={"square"}
              size='tiny'
              style={{ width: 10, height: 10 }}
              source={require('../../assets/icons/Rectangle_orange.png')} />
            <Text>  </Text>TAREAS RUTINARIAS

          </Text>
          <>



            <View>
              {
                // console.log(tareasRutinariasPorId),
                tareasRutinariasPorId.map((obj, indexT) => {

                  // console.log(obj)
                  if (obj.complete === 1) {
                    contador++;
                  }
                  dataScreen4.cantTareasCompletas = contador;
                  // console.log("Mi contador es = " + contador)
                  let todeArray = obj.detail_tasks;
                  let tamano = todeArray.length;
                  // console.log(todeArray)
                  // let myHope = []
                  // todeArray.forEach((element, index) => {
                  //   myHope.push(<MenuItem key={index} title={indexT + "." + (index + 1) + " " + element.name} />)
                  //   // console.log(element)
                  //   // console.log("----------------------< BARRA SEPARADORA >----------------------------")
                  // });
                  return (
                    displayValue === "Seleccione un SubProceso" ? null : (
                      <Radio.Group style={{ marginVertical: 5 }} key={obj.id} name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                        setValue(nextValue);
                        dataScreen4.taskId = nextValue;
                        miDataParaScreen2(obj);
                      }}>
                        {obj.complete === 1 ?
                          (
                            <Checkbox key={obj.id} colorScheme="orange" isDisabled defaultIsChecked value="two">
                              {(indexT + 1) + ". " + todeArray[0].name}
                            </Checkbox>
                          ) :
                          (<Radio key={obj.id} value={obj.id}

                            colorScheme={'orange'} icon={<Icon as={<FontAwesomeIcon name="check" />} />}>
                            {displayValue === 'Seleccione un SubProceso' ? null :
                              (
                                tamano > 1 ? (
                                  <Text style={{ marginHorizontal: 5, textAlign: 'justify', width: (width - 50) }}
                                    key={obj.id}>Esta tarea posee: {tamano} Subtareas, presione en "+" para mayor información
                                    <Text
                                      // style={[{ width: 1.2 }, { height: 1.2 }]}
                                      status='basic'
                                      style={{ backgroundColor: 'white', color: '#ea3e18', fontWeight: 'bold', fontSize: 20 }}
                                      onPress={() => { activarModalDataExtra(obj.detail_tasks, obj.id); }}> + </Text>
                                  </Text>
                                  // <Button onPress={() => { activarModalDataExtra(obj.detail_tasks, obj.id) }} key={obj.id} title={"Esta tarea posee: " + tamano + " Subtareas, despliegue para más información"}>
                                  //   {myHope}
                                  // </Button>
                                ) :
                                  <Text style={{ marginHorizontal: 5, textAlign: 'justify', width: (width - 50) }} key={obj.id}>{(indexT + 1) + ". " + todeArray[0].name}</Text>
                              )}
                          </Radio>)}


                      </Radio.Group>
                    )
                    // )
                  );
                })}
            </View>

          </>


          <View style={{ alignSelf: 'center', marginTop: 50 }}>
            <Button style={[styles.button, {
              backgroundColor: buttonState ? '#ECECEC' : '#01286B'
            }]} disabled={buttonState} onPress={() => { navigation.navigate('Screen2', { value, midataParaObjetoScreen2, dataScreen4 }); }}>
              Siguiente
            </Button>
            {/* <NextButton/> */}
          </View>
          {/* {
  tareasRutinariasPorId.map((obj, index) => {

    return (
      // displayValue === undefined ? null :
      //   <Text key={index}>{index + 1}. {obj.description}</Text>
      

    )
  })
} */}
        </View>


      </Layout>

      {<ModalComponent visible={modalMoreData} onClose={() => setModalMoreData(false)} objetoParaModal={objetoParaModal} objetoIdParaModal={objetoIdParaModal} />}



    </ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ alignSelf: 'center', width: 90, height: 30, borderRadius: 40, margin: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECECEC', borderRadius: 40, }}>
          <Text style={{ color: '#01286B', textAlign: 'center', fontSize: 14 }}>
            Pág. 1 / 4
          </Text>
        </View>
      </View>
    </>

  )

}

export default Screen1;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    width: 200,
    height: 42,
    backgroundColor: '#01286B',
    borderColor: 'transparent'
  },
  group: {
    marginVertical: 4,
  },
  option: {
    marginVertical: 4,
    marginHorizontal: 12,

  },
  tittlesStyle: {
    fontSize: 17,
    color: '#01286B',
    fontWeight: '600',
    marginVertical: 10
  },
  container: {
    justifyContent: 'center',
    // margin: 30
    margin: 10,
    backgroundColor: '#FFFFFF'
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
  },
  logo: {
    // filter: 'grayscale(100%)',
    width: 100,
    height: 100,
    borderRadius: 18,
    resizeMode: "cover",
  }

});
