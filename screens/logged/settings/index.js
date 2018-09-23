import React, {Component} from 'react';

import {
    Text,
    View
} from 'react-native';

export default class SettingsScreen extends Component {
    render() {
        return(
            <View style={{flex:1, paddingTop: 25, alignItems:'center', backgroundColor: '#E1E1E1'}}>
                <Text>Settingscreen</Text>
            </View>
        )
    }
};
