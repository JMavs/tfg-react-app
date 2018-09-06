import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import HomeScreen from "./screens/logged/home";
import SettingsScreen from "./screens/logged/settings";

const MainRouter = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Settings: {
        screen: SettingsScreen,
    }
}, {});

export default MainRouter;