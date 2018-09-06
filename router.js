import {createStackNavigator} from "react-navigation";

// Initial screens
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import MainScreen from "./screens/main";

const Router = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null,
        },
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            header: null,
        },
    },
    Main: {
        screen: MainScreen,
        navigationOptions: {
            header: null,
        }
    }
});

export default Router;