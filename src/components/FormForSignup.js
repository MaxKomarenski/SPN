import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class FormForLogin extends Component<{}>{

    static print (output) {

    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Name"
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           onSubmitEditing={() => this.surname.focus()}
                           ref={(input) => this.name = input}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Surname"
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           onSubmitEditing={() => this.phone.focus()}
                           ref={(input) => this.surname = input}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Phone number"
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           keyboardType='phone-pad'
                           onSubmitEditing={() => this.city.focus()}
                           ref={(input) => this.phone = input}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="City"
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           onSubmitEditing={() => this.email.focus()}
                           ref={(input) => this.city = input}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Email"
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           keyboardType='email-address'
                           onSubmitEditing={() => this.password.focus()}
                           ref={(input) => this.email = input}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Password"
                           secureTextEntry={true}
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           ref={(input) => this.password = input}
                />

                <TouchableOpacity style={styles.button}>
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