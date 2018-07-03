import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import KeyValueStorage from 'react-native-key-value-storage'

export default class FormForLogin extends Component<{}>{

    constructor(props){
        super(props);

        this.state = {
            login: '',
            password: '',
        }
    }

    loginInServer =(logAndPass) => {
        return fetch('http://10.0.2.2:8080/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(logAndPass),
        }).then((response) => response.headers.get('Authorization'))
            .then((responseText) => {
                //console.log('json  ------------    ' + responseText);
                KeyValueStorage.set("access_key", responseText)
            })
            .catch((error) => {
                console.log("reset client error-------",error);
            });
    };

    onPress = () =>{
        console.log(this.state.login + ' ' + this.state.password);
        const loginAndPassword = {
            email: this.state.login,
            password: this.state.password
        };

        // fetch('http://10.0.2.2:8080/login', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(loginAndPassword),
        // });

        this.loginInServer(loginAndPassword)
    };

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Email"
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           keyboardType='email-address'
                           onSubmitEditing={() => this.password.focus()} // move user to password field
                           onChangeText={(text) => this.setState({login:text})}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Password"
                           secureTextEntry={true}
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           ref={(input) => this.password = input} // move user to password field
                           onChangeText={(text) => this.setState({password:text})}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center'
    },
    inputBox:{
        width:300,
        paddingVertical:13,
        backgroundColor:'#000000',
        borderRadius:25,
        paddingHorizontal:18,
        fontSize:16,
        color:'#ffffff',
        marginVertical:5
    },
    button:{
        width:300,
        backgroundColor:'#ee484c',
        borderRadius:25,
        marginVertical:5,
        alignItems:'center',
        paddingVertical:13,
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
    }
});