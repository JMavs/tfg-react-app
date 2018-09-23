import React, { Component } from 'react';

import {
    AsyncStorage,
    BackHandler,
    Button,
    Text,
    View
} from 'react-native';

import '../../../globals';

export default class AboutScreen extends Component {
    async logout(navigator) {
        console.log(navigator);
        try {
            await AsyncStorage.removeItem('access_token');
            navigator.navigate('Login');
        } catch (error) {
            console.log('Error!')
        }
    }

    render() {
        const { rootNavigation } = this.props.screenProps;
        return(
            <View style={{flex:1, paddingTop: 25, alignItems:'center', backgroundColor: '#E1E1E1'}}>
                <Text>Sobre</Text>
                <Button
                    onPress={() => this.logout(rootNavigation)}
                    title="Cerrar sesión"
                >
                    Cerrar sesión
                </Button>
                <Text>
                    Versión: {global.version}
                </Text>
            </View>
        )
    }
};
