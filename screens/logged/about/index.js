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
            <View>
                <Text>Sobre</Text>
                <Button
                    onPress={() => this.logout(rootNavigation)}
                    title="Salir"
                >
                    Salir
                </Button>
                <Text>
                    Versión: {global.version}
                </Text>
            </View>
        )
    }
};
