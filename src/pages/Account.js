import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image, AsyncStorage
} from 'react-native';
import {createStackNavigator, StackNavigator} from 'react-navigation';
import AccountHeader from '../components/AccountHeader';
import InfoPanel from '../components/InfoPanel';
import Bar from '../components/Bar';
import PhotoGrid from '../components/PhotoGrid'
import { DrawerNavigator } from 'react-navigation';
import {HamburgerIcon} from "../../App";

export default class Account extends Component<{}>{

    constructor() {
        super();
        this.state = {
            phoneNumber: '',
            cityAndCountry: ''
        }
    }
    updateText = (number, country) => {
        this.setState({phoneNumber: number, cityAndCountry: country})
    };

    getUserInformation = async () => {

        try {
            let user_id = await AsyncStorage.getItem("user_id");
            let access_key = await AsyncStorage.getItem("access_key");

            const id = {
                id: user_id
            };

            fetch('http://10.0.2.2:8080/get_user_information', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': access_key,
                },

                body: JSON.stringify(id),
            }).then((response) => response.json())
                .then((responseJSON) => {
                    this.updateText(responseJSON.phoneNumber, responseJSON.place);

                }).catch((error) => {
                alert(error)
            });



        }catch (e) {
            alert("1 " + e)
        }


    };

    componentDidMount(){

        this.getUserInformation()
    }

    //

    render(){
        return(
            <View style={styles.container}>
                <AccountHeader/>
                <InfoPanel title="information">
                    <View style={styles.informationView}>
                        <Image
                            style={styles.iconInformation}
                            source={require('../img/phone.png')}
                        />
                        <Text style={styles.textStyle}>{this.state.phoneNumber}</Text>
                    </View>

                    <View style={styles.informationView}>
                        <Image
                            style={styles.iconInformation}
                            source={require('../img/country.png')}
                        />
                        <Text style={styles.textStyle}>{this.state.cityAndCountry}</Text>
                    </View>
                </InfoPanel>
                <Bar/>
                <PhotoGrid/>
            </View>
        )
    }

}

export const Account_StackNavigator = StackNavigator({
    First: {
        screen: Account,
        navigationOptions: ({ navigation }) => ({
            title: 'Account',
            headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    },
});

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    informationView: {
        flexDirection: 'row'
    },
    iconInformation: {
        height: 27,
        width: 27,
        marginLeft: 10,
        marginTop: 5
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        marginLeft: 15,
        marginTop: 5
    },
});