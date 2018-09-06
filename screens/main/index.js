import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
} from 'react-native';

import MainRouter from '../../main-router';

export default class MainScreen extends Component {
    constructor(props){
        super(props);
        this.state = { api_token: props.navigation.state.params.api_token }
    }

    render() {
        return(
            <SafeAreaView style={ styles.mainStyle }>
                  <View style={{flex: 1}}>
                      <MainRouter/>
                  </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
});
