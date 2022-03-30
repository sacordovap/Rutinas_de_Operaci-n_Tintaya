import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Icon, MenuItem, OverflowMenu, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


const MenuIcon = (props) => (
    <Icon {...props} fill='#FFFFFF' name='more-vertical' />
);


const LogoutIcon = (props) => (
    <Icon {...props} name='log-out' />
);

const TemplateVersion2Oscuro = () => {

    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction style={{ marginTop: 51 }} icon={MenuIcon} onPress={toggleMenu} />
    );

    const renderOverflowMenuAction = () => (
        <React.Fragment>
            <Avatar
                style={styles.logo}
                shape={"square"}
                size='giant'
                resizeMode="contain"
                source={require('../../assets/logos/Logo_blanco.png')} />
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem accessoryLeft={LogoutIcon} title='Logout' />
            </OverflowMenu>
        </React.Fragment>
    );

    const renderTitle = (props) => (
        <View style={styles.titleContainer}>
            <Text style={styles.rutOp}>RUT-OP</Text>
        </View>
    );

    return (
        <TopNavigation style={{backgroundColor:'#01286b'}}
          
            title={renderTitle}
            accessoryRight={renderOverflowMenuAction}
        />
    );
};
export default TemplateVersion2Oscuro
const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        marginTop: 61,
        width: 89,
        height: 50,
    },
    rutOp: {
        color: "white",
        // fontFamily: "roboto-700",
        fontSize: 30,
        marginLeft: 25,
        marginTop: 61
    },
});