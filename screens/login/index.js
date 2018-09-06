import React, { Component } from 'react';
import {
    AppRegistry,
    AsyncStorage,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';
import '../../globals';

const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            username: null,
            password: null,
            access_token: null,
        };
    }

    async getAPItoken() {
        try {
            const value = await AsyncStorage.getItem('access_token');
            if (value !== null) {
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Main', params: { api_token: value} })],
                });
                this.props.navigation.dispatch(resetAction);
            }
        } catch (error) {
            console.log('Error!')
        }
    }

    async saveAPItoken(value) {
        try {
            await AsyncStorage.setItem('access_token', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }

    componentDidMount() {
        this.setState({access_token: this.getAPItoken()});
    }

    login() {
        const url = global.server_url + global.login_path;
        const { username, password } = this.state;
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((responseJson) => {
                    this.saveAPItoken(responseJson.access_token);
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'Main', params: { api_token: responseJson.access_token} })],
                    });
                    this.props.navigation.dispatch(resetAction);
                })
            }
        });
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={background} style={styles.background} resizeMode="cover">
                    <View style={styles.markWrap}>
                        <Image source={mark} style={styles.mark} resizeMode="contain" />
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                            </View>
                            <TextInput
                                placeholder="Usuario"
                                placeholderTextColor="#FFF"
                                style={styles.input}
                                underlineColorAndroid='transparent'
                                onChangeText={(username) => this.setState({username})}
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                            </View>
                            <TextInput
                                placeholderTextColor="#FFF"
                                placeholder="Contraseña"
                                style={styles.input}
                                underlineColorAndroid='transparent'
                                secureTextEntry
                                onChangeText={(password) => this.setState({password})}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={.5}>
                            <View>
                                <Text style={styles.forgotPasswordText}>¿Has olvidado tu contraseña?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText} onPress={() => this.login()}>Iniciar sesión</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.signupWrap}>
                            <Text style={styles.accountText}>¿No tienes cuenta?</Text>
                            <TouchableOpacity activeOpacity={.5}>
                                <View>
                                    <Text onPress={()=> navigate('Register')} style={styles.signupLinkText}>Regístrate</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    markWrap: {
        flex: 1,
        paddingVertical: 30,
    },
    mark: {
        width: null,
        height: null,
        flex: 1,
    },
    background: {
        width,
        height,
    },
    wrapper: {
        paddingVertical: 30,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        height: 20,
        width: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "#FF3366",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
    },
    forgotPasswordText: {
        color: "#D8D8D8",
        backgroundColor: "transparent",
        textAlign: "right",
        paddingRight: 15,
    },
    signupWrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    accountText: {
        color: "#D8D8D8"
    },
    signupLinkText: {
        color: "#FFF",
        marginLeft: 5,
    }
});
