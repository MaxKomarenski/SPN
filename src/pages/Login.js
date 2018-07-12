import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Logo from '../components/Logo';
import FormForLogin from '../components/FormForLogin';

export default class Login extends Component<{}>{
    static signup() {
        Actions.signup()
    }

    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <FormForLogin type='Login' navigation={this.props.navigation}/>
                <View style={styles.signupText}>
                    <Text style={{fontSize:16}}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={Login.signup}>
                        <Text style={{fontSize:16, color:'#ee484c'}}> Sign up!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#ffffff',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    signupText:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row',
    }
});