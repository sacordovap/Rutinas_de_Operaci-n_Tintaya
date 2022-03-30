// import React, { Component, useState } from "react";
// import { StyleSheet, View, Text, Image } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { Menu, Provider } from 'react-native-paper';
// const image = require('../../assets/backgrounds/Pantalla_login.png')
// const logo_color = require('../../assets/logos/Logo_color.png')

// const TemplateScreen = () => {

//     const [estadoInicial, setEstadoInicial] = useState(true)

//     const _openMenu = () => (
//         setEstadoInicial(true)
//     );

//     const _closeMenu = () => (
//         setEstadoInicial(false)
//     );

//     return (
//         <View style={styles.container}>
//             <Text style={styles.rutOp}>RUT-OP</Text>
//             <View style={styles.rutOpFiller}></View>
//             <View style={styles.imageRow}>
//                 <Image
//                     source={logo_color}
//                     resizeMode="contain"
//                     style={styles.image}
//                 ></Image>
//                 <Provider>
//                     <Menu
//                         visible={estadoInicial}
//                         onDismiss={_closeMenu}
//                         anchor={
//                             <Icon name="dots-vertical" style={styles.icon} onPress={_openMenu}></Icon>
//                         }
//                     >
//                         <Menu.Item onPress={() => { }} title="Cerrar Sesion" />
//                     </Menu>
//                 </Provider>
//             </View>
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "rgba(255,255,255,1)",
//         flexDirection: "row"
//     },
//     rutOp: {
//         fontFamily: "roboto-700",
//         color: "rgba(1,40,107,1)",
//         fontSize: 30,
//         marginLeft: 25,
//         marginTop: 81
//     },
//     rutOpFiller: {
//         flex: 1,
//         flexDirection: "row"
//     },
//     image: {
//         width: 84,
//         height: 43,
//         marginRight: 5,
//         marginTop: 29
//     },
//     icon: {
//         color: "rgba(1,40,107,1)",
//         fontSize: 27
//     },
//     imageRow: {
//         height: 72,
//         flexDirection: "row",
//         marginRight: 16,
//         marginTop: 49
//     }
// });

// export default TemplateScreen;