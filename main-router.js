import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import HomeScreen from "./screens/logged/home";
import SettingsScreen from "./screens/logged/settings";
import AboutScreen from "./screens/logged/about";

const MainRouter = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Settings: {
        screen: SettingsScreen,
    },
    About: {
        screen: AboutScreen,
    }
});

export default MainRouter;