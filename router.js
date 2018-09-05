import {createStackNavigator} from "react-navigation";
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";

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
});

export default Router;