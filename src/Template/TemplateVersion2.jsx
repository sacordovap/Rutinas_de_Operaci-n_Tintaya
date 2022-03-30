import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Icon, MenuItem, OverflowMenu, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useNavigation } from '@react-navigation/native';


const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical' fill='#01286b'/>
);


const LogoutIcon = (props) => (
    <Icon {...props} name='log-out' />
);

const TemplateVersion2 = () => {

    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction style={{ marginTop: 11 }} icon={MenuIcon} onPress={toggleMenu} />
    );
    const navigation = useNavigation();

    const cerrarSesion = async () => {
        try {
            await AsyncStorage.removeItem('token')
            navigation.navigate('Login')
        } catch (e) {
            // console.log(e)
        }

        // console.log('Done.')
    }
    const [Estado, setEstado] = useState(false);
    const showAlert = () => {
        setEstado(true);
    };
    const hideAlert = () => {
        setEstado(false);
    };
    const renderOverflowMenuAction = () => (
        <React.Fragment>
            <Avatar
                style={styles.logo}
                shape={"square"}
                size='giant'
                resizeMode="contain"
                source={require('../../assets/logos/Logo_color.png')} />
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}
            >
                <MenuItem accessoryLeft={LogoutIcon} title='Logout' onPress={()=>{showAlert();}}/>
            </OverflowMenu>
            <AwesomeAlert
                show={Estado}
                showProgress={false}
                title="Confirmación"
                titleStyle={{ fontSize: 22, marginBottom: 10 }}
                messageStyle={{ fontSize: 18, marginBottom: 10 }}
                message="Está seguro que desea cerrar sesión?"
                closeOnTouchOutside={false}
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
                }
                }
                onConfirmPressed={() => {
                    hideAlert();
                    cerrarSesion()
                    // navigation.navigate('Login')
                }}

            />
        </React.Fragment>
    );

    const renderTitle = (props) => (
        <View style={styles.titleContainer}>
            <Text style={styles.rutOp}>RUT-OP</Text>
        </View>
    );

    return (
        <TopNavigation
            title={renderTitle}
            accessoryRight={renderOverflowMenuAction}
        />
    );
};
export default TemplateVersion2
const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        marginTop: 10,
        width: 89,
        height: 50,
    },
    rutOp: {
        color: "rgba(1,40,107,1)",
        // fontFamily: "roboto-700",
        fontSize: 30,
        marginLeft: 25,
        marginTop: 10
    },
});