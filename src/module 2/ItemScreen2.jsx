import { StyleSheet, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HStack, ScrollView, Spacer, Select } from 'native-base'
import { Avatar, Button, Card, IndexPath, Modal, Radio, RadioGroup, Text } from '@ui-kitten/components'
import DropDownPicker from 'react-native-dropdown-picker'
import { useNavigation } from '@react-navigation/native'

const ItemScreen2 = ({ item, miObjetoNuevo }) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const width = useWindowDimensions().width
    const height = useWindowDimensions().height
    const [service, setService] = useState('')

    const [frecuenciaSelect, setFrecuenciaSelect] = useState(0)
    // console.log(frecuenciaSelect)
    const tareasDetalladas = item.detail_tasks
    // console.log("Soy el screeen ITEMSCREEN2")
    // console.log(tareasDetalladas)
    const opcionesSelect1 = [
        {
            "idOption": 0,
            "optionDescription": "No",
        },
        {
            "idOption": 1,
            "optionDescription": "Si",
        },
    ]

    const [visible, setVisible] = useState(false);
    const [modalMasInfo, setModalMasInfo] = useState(false);

    const displayValue = opcionesSelect1[selectedIndex.row];
    // console.log(displayValue)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'false', value: 'No' },
        { label: 'true', value: 'Si' }
    ]);

    const [opcionSeleccionadaModalIndex, setOpcionSeleccionadaModalIndex] = useState(0)
    const [valorDelSelect, setValorDelSelect] = useState('Seleccione una Subtarea')
    const [subTareasPorId, setSubTareasPorId] = useState([])

    const listarSubTareas = (idSubtarea) => {
        // console.log(idSubtarea)
        const subProcess = tareasDetalladas.find((e) => (e.id) === idSubtarea)
        // console.log(subProcess)
        // console.log("dadwaawe")
        // setValorDelSelect(subProcess.name)
    }
    const [pruebaSelect, setPruebaSelect] = useState(0)
    const renderSelectOptions = (titulo) => (

        <SelectItem key={titulo.id} title={titulo.name} />
    )

    const [dataFiltrada, setDataFiltrada] = useState([])

    const obtenerDataSubtareaPorId = (idSubtarea) => {

        const miDataFiltrada = tareasDetalladas.find((e) => (e.id) === idSubtarea)
        // console.warn(miDataFiltrada)
        setDataFiltrada(miDataFiltrada)
    }

    const obtenerFrecuencia = () => {
        let miFrecuencia = 0
        if (item.day_times != null) {
            miFrecuencia = item.day_times
        } else if (item.month_times != null) {
            miFrecuencia = item.month_times
        } else if (item.year_times != null) {
            miFrecuencia = item.year_times
        } else {
            miFrecuencia = 0
        }
        miObjetoNuevo.frequency = miFrecuencia
    }
    useEffect(() => {
        obtenerFrecuencia()
    }, [])

    // useEffect(() => {
    //     console.log(miObjetoNuevo)
    // })
    const [buttonState, setButtonState] = useState(true)

    const comprobarButtonState = () => {
        if (frecuenciaSelect != '0') {
            setButtonState(false)
        } else {
            setButtonState(true)
        }
    }

    useEffect(() => {
        comprobarButtonState()
    }, [frecuenciaSelect])
    const navigation = useNavigation();

    return (
        <View space={1} justifyContent="space-between">

            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    <RadioGroup
                        selectedIndex={selectedIndex}
                        onChange={index => setSelectedIndex(index)}>
                        <Radio>Diario</Radio>
                        <Radio>Semanal</Radio>
                        <Radio>Mensual</Radio>
                    </RadioGroup>
                    <Button onPress={() => setVisible(false)}>
                        Aceptar
                    </Button>
                </Card>
            </Modal>

            <HStack style={{ marginVertical: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text numberOfLines={3} style={[styles.tittlesStyle, { width: width / 2 }]} >


                        N° de personas que realizan la actividad</Text>
                </View>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.quantity_people}
                </Text>
            </HStack>
            <HStack style={{ marginVertical: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                        Personal de Antapaccay</Text>
                </View>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.antapaccay_staff}
                </Text>
            </HStack>
            <HStack style={{ marginVertical: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                        Contratistas</Text>
                </View>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.contractors}
                </Text>
            </HStack>
            <HStack style={{ marginVertical: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                        Ambas Personas</Text>
                </View>
                <Spacer />
                {
                    item.antapaccay_staff !== 0 && item.contractors !== 0 ?
                        <Text style={styles.textRightStyle}>
                            <Select selectedValue={service}
                                width="45"
                                height="8"
                                _dark={{
                                    bg: "#ea3e18"
                                }}
                                _light={{
                                    bg: "#ea3e18"
                                }}
                                color="white"
                                accessibilityLabel="-"
                                dropdownCloseIcon={true}
                                placeholder="-"
                                _selectedItem={{
                                    bg: "#ea3e18"
                                }} onValueChange={itemValue => {
                                    miObjetoNuevo.bothPerson = itemValue
                                    setService(itemValue)
                                }}>
                                <Select.Item label="Si" value="1" />
                                <Select.Item label="No" value="0" />
                            </Select>
                        </Text>

                        :
                        <Text style={styles.textRightStyle}>No</Text>


                }

            </HStack>
            {
                // item.detail_tasks.length === 1 && item.type_task === 0 ? (
                item.detail_tasks.length === 1 ? (
                    // item.detail_tasks.length !== 0 ? (
                    <>
                        <HStack style={{ marginVertical: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                <Avatar
                                    shape={"square"}
                                    size='tiny'
                                    style={{ width: 10, height: 10, marginTop: 5 }}
                                    source={require('../../assets/icons/Rectangle_orange.png')}
                                />
                                <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                    Frecuencia</Text>
                            </View>
                            <Spacer />
                            <Text style={[styles.textRightStyle]}>
                                <Select selectedValue={frecuenciaSelect}
                                    width="45"
                                    height="8"
                                    _dark={{
                                        bg: "#ea3e18"
                                    }}
                                    _light={{
                                        bg: "#ea3e18"
                                    }}
                                    color="white"
                                    accessibilityLabel="-"
                                    dropdownCloseIcon={true}
                                    placeholder="-"
                                    _selectedItem={{
                                        bg: "#ea3e18"
                                    }} onValueChange={itemValue => setFrecuenciaSelect(itemValue)}>
                                    <Select.Item label="Diaria" value="1" />
                                    <Select.Item label="Semanal" value="2" />
                                    <Select.Item label="Mensual" value="3" />
                                </Select>
                            </Text>

                        </HStack>
                        {
                            item.day_times != null ?
                                (<HStack style={{ marginVertical: 15 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                        <Avatar
                                            shape={"square"}
                                            size='tiny'
                                            style={{ width: 10, height: 10, marginTop: 5 }}
                                            source={require('../../assets/icons/Rectangle_orange.png')}
                                        />
                                        <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                            N° de veces al Día</Text>
                                    </View>
                                    <Spacer />
                                    <Text style={[styles.textRightStyle, {
                                        backgroundColor: (frecuenciaSelect != 1 || (frecuenciaSelect == 1 && item.day_times == null)) ? '#ECECEC' : '#EA3E18',
                                        color: item.day_times < 1 ? '#969696' : '#FFFFFF'
                                    }]}>
                                        {
                                            (frecuenciaSelect == 1 && item.day_times >= 1) ?
                                                (item.day_times) : ('-')
                                        }
                                    </Text>
                                </HStack>) :
                                (
                                    item.week_times != null ?
                                        (<HStack style={{ marginVertical: 15 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                                <Avatar
                                                    shape={"square"}
                                                    size='tiny'
                                                    style={{ width: 10, height: 10, marginTop: 5 }}
                                                    source={require('../../assets/icons/Rectangle_orange.png')}
                                                />
                                                <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                                    N° de veces a la Semana</Text>
                                            </View>
                                            <Spacer />
                                            <Text style={[styles.textRightStyle, {
                                                backgroundColor: (frecuenciaSelect != 2 || (frecuenciaSelect == 2 && item.week_times == null)) ? '#ECECEC' : '#EA3E18',
                                                color: item.week_times < 1 ? '#969696' : '#FFFFFF'
                                            }]}>
                                                {
                                                    (frecuenciaSelect == 2 && item.week_times >= 1) ? item.week_times : ('-')
                                                }
                                            </Text>
                                        </HStack>) :
                                        <HStack style={{ marginVertical: 15 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                                <Avatar
                                                    shape={"square"}
                                                    size='tiny'
                                                    style={{ width: 10, height: 10, marginTop: 5 }}
                                                    source={require('../../assets/icons/Rectangle_orange.png')}
                                                />
                                                <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                                    N° de veces al Mes</Text>
                                            </View>
                                            <Spacer />
                                            <Text style={[styles.textRightStyle, {
                                                backgroundColor: (frecuenciaSelect != 3 || (frecuenciaSelect == 3 && item.month_times == null)) ? '#ECECEC' : '#EA3E18',
                                                color: item.month_times < 1 ? '#969696' : '#FFFFFF'
                                            }]}>
                                                {
                                                    (frecuenciaSelect == 3 && item.month_times >= 1) ? item.month_times : ('-')
                                                }
                                            </Text>
                                        </HStack>

                                )
                        }



                    </>
                ) : (
                    <>
                        <HStack style={{ marginVertical: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                <Avatar
                                    shape={"square"}
                                    size='tiny'
                                    style={{ width: 10, height: 10, marginTop: 5 }}
                                    source={require('../../assets/icons/Rectangle_orange.png')}
                                />
                                <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                    Esta tarea posee {item.detail_tasks.length} Subtareas, presione el botón + para mayor información</Text>
                            </View>
                            <Spacer />
                            <Text style={[styles.textRightStyle, { marginTop: 5 }]} onPress={() => setModalMasInfo(true)}>
                                +
                            </Text>
                        </HStack>
                        <>
                            <HStack style={{ marginVertical: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                    <Avatar
                                        shape={"square"}
                                        size='tiny'
                                        style={{ width: 10, height: 10, marginTop: 5 }}
                                        source={require('../../assets/icons/Rectangle_orange.png')}
                                    />
                                    <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                        Frecuencia</Text>
                                </View>
                                <Spacer />
                                <Text style={[styles.textRightStyle]}>
                                    <Select selectedValue={frecuenciaSelect}
                                        width="45"
                                        height="8"
                                        _dark={{
                                            bg: "#ea3e18"
                                        }}
                                        _light={{
                                            bg: "#ea3e18"
                                        }}
                                        color="white"
                                        accessibilityLabel="-"
                                        dropdownCloseIcon={true}
                                        placeholder="-"
                                        _selectedItem={{
                                            bg: "#ea3e18"
                                        }} onValueChange={itemValue => setFrecuenciaSelect(itemValue)}>
                                        <Select.Item label="D" value="1" />
                                        <Select.Item label="S" value="2" />
                                        <Select.Item label="M" value="3" />
                                    </Select>
                                </Text>

                            </HStack>
                            {
                                item.day_times != null ? (
                                    <HStack style={{ marginVertical: 15 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                            <Avatar
                                                shape={"square"}
                                                size='tiny'
                                                style={{ width: 10, height: 10, marginTop: 5 }}
                                                source={require('../../assets/icons/Rectangle_orange.png')}
                                            />
                                            <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                                N° de veces al Día</Text>
                                        </View>
                                        <Spacer />
                                        <Text style={[styles.textRightStyle, {
                                            backgroundColor: (frecuenciaSelect != 1 || (frecuenciaSelect == 2 && item.day_times == null)) ? '#ECECEC' : '#EA3E18',
                                            color: item.day_times < 1 ? '#969696' : '#FFFFFF'
                                        }]}>
                                            {
                                                (frecuenciaSelect == 1 && item.day_times >= 1) ?
                                                    (item.day_times) : ('-')
                                            }
                                        </Text>
                                    </HStack>

                                ) : (item.week_times != null ? (
                                    <HStack style={{ marginVertical: 15 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                            <Avatar
                                                shape={"square"}
                                                size='tiny'
                                                style={{ width: 10, height: 10, marginTop: 5 }}
                                                source={require('../../assets/icons/Rectangle_orange.png')}
                                            />
                                            <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                                N° de veces a la Semana</Text>
                                        </View>
                                        <Spacer />
                                        <Text style={[styles.textRightStyle, {
                                            backgroundColor: (frecuenciaSelect != 2 || (frecuenciaSelect == 2 && item.week_times == null)) ? '#ECECEC' : '#EA3E18',
                                            color: item.week_times < 1 ? '#969696' : '#FFFFFF'
                                        }]}>
                                            {
                                                (frecuenciaSelect == 2 && item.week_times >= 1) ? item.week_times : ('-')
                                            }
                                        </Text>
                                    </HStack>
                                ) : (<HStack style={{ marginVertical: 15 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                        <Avatar
                                            shape={"square"}
                                            size='tiny'
                                            style={{ width: 10, height: 10, marginTop: 5 }}
                                            source={require('../../assets/icons/Rectangle_orange.png')}
                                        />
                                        <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                            N° de veces al Mes</Text>
                                    </View>
                                    <Spacer />
                                    <Text style={[styles.textRightStyle, {
                                        backgroundColor: (frecuenciaSelect != 3 || (frecuenciaSelect == 3 && item.month_times == null)) ? '#ECECEC' : '#EA3E18',
                                        color: item.month_times < 1 ? '#969696' : '#FFFFFF'
                                    }]}>
                                        {
                                            (frecuenciaSelect == 3 && item.month_times >= 1) ? item.month_times : ('-')
                                        }
                                    </Text>
                                </HStack>))
                            }


                        </>
                    </>
                )
            }
            <HStack style={{ marginVertical: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                        Tiempo de cada Acción(horas)</Text>
                </View>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.action_time}
                </Text>
            </HStack>
            <HStack style={{ marginVertical: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text style={[styles.tittlesStyle, { width: width / 2 }]} >
                        Horas Turno por Persona</Text>
                </View>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.person_turn}
                </Text>
            </HStack>


            <Modal
                visible={modalMasInfo}
                style={{ maxWidth: 500 }}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setModalMasInfo(false)}>
                <Card disabled={true}>

                    {/* <Select
                        value={valorDelSelect}
                        placeholder={"Seleccion una Subtarea"}
                        selectedIndex={opcionSeleccionadaModalIndex}
                        onSelect={(index) => {
                            // console.log(index);
                            setOpcionSeleccionadaModalIndex(index)
                            listarSubTareas((index.row))
                        }
                        }
                    >
                        {tareasDetalladas.map((obj) => renderSelectOptions(obj))}
                    </Select> */}
                    <Select
                        selectedValue={pruebaSelect}
                        minWidth="200"
                        accessibilityLabel="Seleccione la SubTarea"
                        placeholder="Seleccione la SubTarea"
                        _selectedItem={{
                            bg: "teal.600",
                            color: "red"
                        }}
                        mt={1}
                        onValueChange={itemValue => {
                            setPruebaSelect(itemValue)
                            obtenerDataSubtareaPorId(itemValue)
                        }}>
                        {
                            tareasDetalladas.map((obj) => {

                                return (
                                    <Select.Item
                                        key={obj.id}
                                        label={obj.name}
                                        value={obj.id}
                                    />
                                )
                            })
                        }
                    </Select>

                    {/* <HStack style={{ marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                            <Avatar
                                shape={"square"}
                                size='tiny'
                                style={{ width: 10, height: 10, marginTop: 5 }}
                                source={require('../../assets/icons/Rectangle_orange.png')}
                            />
                            <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                Frecuencia</Text>
                        </View>
                        <Spacer />
                        <Text style={styles.textRightStyle} onPress={() => setVisible(true)}>
                            Dedos
                        </Text>
                    </HStack> */}
                    <HStack style={{ marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                            <Avatar
                                shape={"square"}
                                size='tiny'
                                style={{ width: 10, height: 10, marginTop: 5 }}
                                source={require('../../assets/icons/Rectangle_orange.png')}
                            />
                            <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                N° de veces al Día</Text>
                        </View>
                        <Spacer />
                        <Text style={[styles.textRightStyle, {
                            backgroundColor: dataFiltrada?.day_times < 1 ? '#ECECEC' : '#EA3E18',
                            color: dataFiltrada?.day_times < 1 ? '#969696' : '#FFFFFF'
                        }]}>
                            {
                                dataFiltrada?.day_times >= 1 ?
                                    (dataFiltrada?.day_times) : ('-')
                            }
                        </Text>
                    </HStack>
                    <HStack style={{ marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                            <Avatar
                                shape={"square"}
                                size='tiny'
                                style={{ width: 10, height: 10, marginTop: 5 }}
                                source={require('../../assets/icons/Rectangle_orange.png')}
                            />
                            <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                N° de veces a la Semana</Text>
                        </View>
                        <Spacer />
                        <Text style={[styles.textRightStyle, {
                            backgroundColor: dataFiltrada?.week_times < 1 ? '#ECECEC' : '#EA3E18',
                            color: dataFiltrada?.week_times < 1 ? '#969696' : '#FFFFFF'
                        }]}>
                            {
                                dataFiltrada?.week_times >= 1 ? dataFiltrada?.week_times : ('-')
                            }
                        </Text>
                    </HStack>
                    <HStack style={{ marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                            <Avatar
                                shape={"square"}
                                size='tiny'
                                style={{ width: 10, height: 10, marginTop: 5 }}
                                source={require('../../assets/icons/Rectangle_orange.png')}
                            />
                            <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                N° de veces al Mes</Text>
                        </View>
                        <Spacer />
                        <Text style={[styles.textRightStyle, {
                            backgroundColor: dataFiltrada?.month_times < 1 ? '#ECECEC' : '#EA3E18',
                            color: dataFiltrada?.month_times < 1 ? '#969696' : '#FFFFFF'
                        }]}>
                            {
                                dataFiltrada?.month_times >= 1 ? dataFiltrada?.month_times : ('-')
                            }
                        </Text>
                    </HStack>
                    <Button onPress={() => setModalMasInfo(false)}>
                        Aceptar
                    </Button>
                </Card>
            </Modal>
            <View style={{ alignSelf: 'center', marginTop: 40, marginBottom: 10 }}>

                <Button onPress={() => navigation.goBack()} style={[styles.button, {
                    backgroundColor: '#01286B',
                }, { color: 'white' }, { marginBottom: 25 }]}>
                    Atrás
                </Button>
                <Button style={[styles.button, {
                    backgroundColor: buttonState ? '#ECECEC' : '#01286B'
                }]} disabled={buttonState} onPress={() => { navigation.navigate('Screen3', { miObjetoNuevo }) }}>
                    Siguiente
                </Button>

            </View>

        </View>
    )
}

export default ItemScreen2

const styles = StyleSheet.create({
    button: {
        borderRadius: 40,
        width: 200,
        height: 42,
        backgroundColor: '#01286B',
        borderColor: 'transparent'
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    selectStyles: {
        backgroundColor: '#EA3E18',
        fontSize: 16,
        color: '#FFFFFF',
        borderRadius: 5,
        textAlign: 'center',
        marginRight: 25,
        width: 40,
        height: 25,
    },
    tittlesStyle: {
        fontSize: 16,
        color: '#01286B',
        fontWeight: '400',
        marginLeft: 10,


    },
    textRightStyle: {

        marginTop: -3,
        marginRight: 25,
        color: '#FFFFFF',
        backgroundColor: '#EA3E18',
        width: 40,
        height: 25,
        textAlign: 'center',
        borderRadius: 5
    },
    selectRightsStyle: {
        marginTop: 10,
        marginRight: 25,
        color: '#FFFFFF',
        paddingTop: 20,
        width: 40,
        height: 25,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})