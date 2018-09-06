import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
} from 'react-native';

import MainRouter from '../../main-router';

export default class MainScreen extends Component {
    render() {
        return(
            <SafeAreaView style={ styles.mainStyle }>
                  <View style={{flex: 1}}>
                      <MainRouter screenProps={{ rootNavigation: this.props.navigation }}/>
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
