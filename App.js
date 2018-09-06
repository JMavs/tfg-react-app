import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Router from './router';

export default class App extends Component{
    render(){
        return(
            <SafeAreaView style={ styles.mainStyle }>
                <Router/>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
});
