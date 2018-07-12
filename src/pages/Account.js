import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {createStackNavigator, StackNavigator} from 'react-navigation';
import AccountHeader from '../components/AccountHeader';
import InfoPanel from '../components/InfoPanel';
import Bar from '../components/Bar';
import PhotoGrid from '../components/PhotoGrid'
import { DrawerNavigator } from 'react-navigation';
import {HamburgerIcon} from "../../App";

export default class Account extends Component<{}>{

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
                        <Text style={styles.textStyle}>1234567890</Text>
                    </View>

                    <View style={styles.informationView}>
                        <Image
                            style={styles.iconInformation}
                            source={require('../img/country.png')}
                        />
                        <Text style={styles.textStyle}>Lviv, Country</Text>
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