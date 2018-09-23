import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import HomeScreen from "./screens/logged/home";
import DataScreen from "./screens/logged/data";
import SettingsScreen from "./screens/logged/settings";
import AboutScreen from "./screens/logged/about";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const MainRouter = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Inicio',
            tabBarIcon:({tintColor})=>(
                <Icon name="ios-home" color={tintColor} size={24}/>
            )
        }
    },
    Data: {
        screen: DataScreen,
        navigationOptions: {
            tabBarLabel: 'Estadísticas',
            tabBarIcon:({tintColor})=>(
                <Icon name="ios-stats" color={tintColor} size={24}/>
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Ajustes',
            tabBarIcon:({tintColor})=>(
                <Icon name="ios-cog" color={tintColor} size={24}/>
            )
        }
    },
    About: {
        screen: AboutScreen,
        navigationOptions: {
            tabBarLabel: 'Sobre',
            tabBarIcon:({tintColor})=>(
                <Icon name="ios-information-circle-outline" color={tintColor} size={24}/>
            )
        }
    }
}, {
    barStyle: { backgroundColor: '#4a7ae9' },
});

export default MainRouter;