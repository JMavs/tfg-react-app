import React, { Component } from 'react'
import {
    Alert,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native'

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");

import '../../globals';

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.GDPRAlert = this.GDPRAlert.bind(this);
    }

    register() {
        const { navigate } = this.props.navigation;
        const url = global.server_url + global.register_path;
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                role: this.state.role,
                glucose_unit: this.state.glucose_unit,
                email: this.state.email,
                first_name: this.state.first_name,
                last_name: this.state.last_name
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                const { access_token } = responseJson;
                console.log(responseJson);
                this.setState({ access_token });
                navigate('Login');
                return responseJson.access_token;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    GDPRAlert() {
        Alert.alert(
            'Términos y condiciones',
            'Marcando Aceptar estás declarando que aceptas nuestros términos y condiciones además de estar de acuerdo con la GRPD.',
            [
                {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Aceptar', onPress: () => this.register()},
            ],
            { cancelable: false }
        )
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <ImageBackground
                    source={background}
                    style={[styles.container, styles.bg]}
                    resizeMode="cover"
                >
                    <View
                        maxHeight="60%"
                    >
                        <ScrollView>
                            <View style={styles.headerContainer}>

                                <View style={styles.headerIconView}>
                                    <TouchableOpacity style={styles.headerBackButtonView} onPress={() => navigate('Login')}>
                                        <Image
                                            source={backIcon}
                                            style={styles.backButtonIcon}
                                            resizeMode="contain"
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.headerTitleView}>
                                    <Text style={styles.titleViewText}>Registrarse</Text>
                                </View>

                            </View>

                            <View style={styles.inputsContainer}>

                                <View style={styles.inputContainer}>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            source={personIcon}
                                            style={styles.inputIcon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <TextInput
                                        style={[styles.input, styles.whiteFont]}
                                        placeholder="Nombre"
                                        placeholderTextColor="#FFF"
                                        underlineColorAndroid='transparent'
                                        onChangeText={(first_name) => this.setState({first_name})}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            source={personIcon}
                                            style={styles.inputIcon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <TextInput
                                        style={[styles.input, styles.whiteFont]}
                                        placeholder="Apellidos"
                                        placeholderTextColor="#FFF"
                                        underlineColorAndroid='transparent'
                                        onChangeText={(last_name) => this.setState({last_name})}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            source={personIcon}
                                            style={styles.inputIcon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <TextInput
                                        style={[styles.input, styles.whiteFont]}
                                        placeholder="Usuario"
                                        placeholderTextColor="#FFF"
                                        underlineColorAndroid='transparent'
                                        autoCapitalize='none'
                                        onChangeText={(username) => this.setState({username})}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            source={emailIcon}
                                            style={styles.inputIcon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <TextInput
                                        style={[styles.input, styles.whiteFont]}
                                        placeholder="Email"
                                        placeholderTextColor="#FFF"
                                        underlineColorAndroid='transparent'
                                        autoCapitalize='none'
                                        onChangeText={(email) => this.setState({email})}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            source={lockIcon}
                                            style={styles.inputIcon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <TextInput
                                        secureTextEntry={true}
                                        style={[styles.input, styles.whiteFont]}
                                        placeholder="Contraseña"
                                        placeholderTextColor="#FFF"
                                        underlineColorAndroid='transparent'
                                        autoCapitalize='none'
                                        onChangeText={(password) => this.setState({password})}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            source={birthdayIcon}
                                            style={styles.inputIcon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <TextInput
                                        style={[styles.input, styles.whiteFont]}
                                        placeholder="Rol (dm1/dm2/doctor/family)"
                                        placeholderTextColor="#FFF"
                                        underlineColorAndroid='transparent'
                                        autoCapitalize='none'
                                        onChangeText={(role) => this.setState({role})}
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            source={birthdayIcon}
                                            style={styles.inputIcon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <TextInput
                                        style={[styles.input, styles.whiteFont]}
                                        placeholder="Unidades (mg/dl)"
                                        placeholderTextColor="#FFF"
                                        underlineColorAndroid='transparent'
                                        autoCapitalize='none'
                                        onChangeText={(glucose_unit) => this.setState({glucose_unit})}
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            source={birthdayIcon}
                                            style={styles.inputIcon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <TextInput
                                        style={[styles.input, styles.whiteFont]}
                                        placeholder="Cumpleaños"
                                        placeholderTextColor="#FFF"
                                        underlineColorAndroid='transparent'
                                        onChangeText={(birthdate) => this.setState({birthdate})}
                                    />
                                </View>

                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.footerContainer}>

                        <TouchableOpacity onPress={() => this.GDPRAlert()}>
                            <View style={styles.signup}>
                                <Text style={styles.button} >Registrarme</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.signin}>
                                <Text style={styles.greyFont}>¿Tienes ya una cuenta?<Text style={styles.whiteFont} onPress={() => navigate('Login')}> Iniciar sesión</Text></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null
    },
    headerContainer: {
        flex: 1,
    },
    inputsContainer: {
        flex: 3,
        marginTop: 50,
    },
    footerContainer: {
        flex: 1
    },
    headerIconView: {
        marginLeft: 10,
        backgroundColor: 'transparent'
    },
    headerBackButtonView: {
        width: 25,
        height: 25,
    },
    backButtonIcon: {
        width: 25,
        height: 25
    },
    headerTitleView: {
        backgroundColor: 'transparent',
        marginTop: 25,
        marginLeft: 25,
    },
    titleViewText: {
        fontSize: 40,
        color: '#fff',
    },
    inputs: {
        paddingVertical: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        flexDirection: 'row',
        height: 75,
    },
    iconContainer: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputIcon: {
        width: 30,
        height: 30,
    },
    input: {
        flex: 1,
        fontSize: 20,
    },
    button: {
        color: '#FFF',
        fontSize: 18,
    },
    signup: {
        backgroundColor: '#3675B6',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 30,
        borderRadius: 60,
        marginLeft: "25%",
        marginRight: "25%",
        width: "50%",
    },
    signin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF'
    }
})