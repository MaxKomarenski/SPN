import React, { Component } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import Geocoder from 'react-native-geocoder';
import Geodecoder from 'react-native-geocoding';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity, Image, TouchableHighlight
} from 'react-native';
import Autocomplete from "react-native-autocomplete-input";

export default class FormForSignUp extends Component<{}>{

    constructor(props){
        super(props);

        this.state = {
            name: '',
            surname: '',
            phone: '',
            city: '',
            email: '',
            password: '',
            country: '',

        };

    }

      getCountriesFromApi = () => {

          console.log('COUNTRY '+ this.state.countryName);
          console.log('CITY '+this.state.regionName)
    };


    onPress = () => {

        const registrationForm = {
            name: this.state.name,
            familyName: this.state.surname,
            phoneNumber: this.state.phone,
            country: 'Ukraine',
            city: this.state.city,
            email: this.state.email,
            password: this.state.password,
        };
        console.log('hui');

        console.log(this.state.name + this.state.surname + this.state.phone + this.state.city + this.state.email + this.state.password);

        fetch('http://10.0.2.2:8080/registration', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationForm),
        }).catch((error) =>{
            console.error(error);
        });
    };
    componentDidMount() {
        var url = 'http://api.ipstack.com/91.210.21.40?access_key=20c570200a2a491efbaff58ab7b440ef';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
                this.setState({
                    country: responseJson.country_name,
                    city: responseJson.city
                });
                console.log('COUNTRY '+ responseJson.country_name);
                console.log('CITY '+responseJson.city)
                this.getCountriesFromApi();
            })
            .catch((error) => {
                //console.error(error);
            });
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
                           onChangeText={(text) => this.setState({name:text})}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Surname"
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           onSubmitEditing={() => this.phone.focus()}
                           ref={(input) => this.surname = input}
                           onChangeText={(text) => this.setState({surname:text})}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Phone number"
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           keyboardType='phone-pad'
                           onSubmitEditing={() => this.country.focus()}
                           ref={(input) => this.phone = input}
                           onChangeText={(text) => this.setState({phone:text})}
                />

                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Country"
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           keyboardType='phone-pad'
                           value={this.state.country}
                           onSubmitEditing={() => this.city.focus()}
                           ref={(input) => this.country = input}
                           onChangeText={(text) => this.setState({country:text})}
                />

                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="City"
                           placeholderTextColor="#ffffff"
                           value={this.state.city}
                           selectionColor='#ffffff'
                           onSubmitEditing={() => this.email.focus()}
                           ref={(input) => this.city = input}
                           onChangeText={(text) => this.setState({city:text})}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Email"
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           keyboardType='email-address'
                           onSubmitEditing={() => this.password.focus()}
                           ref={(input) => this.email = input}
                           onChangeText={(text) => this.setState({email:text})}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Password"
                           secureTextEntry={true}
                           placeholderTextColor="#ffffff"
                           selectionColor='#ffffff'
                           ref={(input) => this.password = input}
                           onChangeText={(text) => this.setState({password:text})}
                />

                <TouchableOpacity style={styles.button}>
                    <Text
                        style={styles.buttonText}
                        onPress={this.onPress.bind(this)}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>

        )
    }
   
}


const styles = StyleSheet.create({
    container : {
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
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
    autocompleteContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    itemText: {
        fontSize: 15,
        margin: 2
    },
    autocomplete:{
        width:300,
        paddingVertical:13,

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
    },
    dropdown_6: {
        paddingRight:200,
        left: 10,
    },
    dropdown_6_image: {
        width: 40,
        height: 40,
    },
    dropdown_2_row: {
        flexDirection: 'row',
        height: 40,
        backgroundColor:'#000000',
        alignItems: 'center',
    },
    dropdown_2_row_text: {
        marginHorizontal: 4,
        fontSize: 16,
        color:'#ffffff',
        textAlignVertical: 'center',
    },
    dropdown_2_dropdown: {
        width: 300,
        height: 150,
        borderColor: 'cornflowerblue',
        borderWidth: 2,
        borderRadius: 3,
    },
});