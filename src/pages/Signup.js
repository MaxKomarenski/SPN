import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import FormForSignup from '../components/FormForSignup';
import {Actions} from "react-native-router-flux";

export default class Signup extends Component<{}>{
    static goBack(){
        Actions.pop();
    }

    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <FormForSignup type='Sign up'/>
                <View style={styles.signupText}>
                    <Text style={{fontSize:16}}>Already have an account?</Text>
                    <TouchableOpacity onPress={Signup.goBack}>
                        <Text style={{fontSize:16, color:'#ee484c'}}> Sign in!</Text>
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