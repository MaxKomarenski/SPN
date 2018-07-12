import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';
import Routes from './src/Routes';
import {   Image, TouchableOpacity, } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import { StackNavigator } from 'react-navigation'
import Account, {Account_StackNavigator} from "./src/pages/Account";
import {ThirdActivity_StackNavigator} from "./src/components/TestActivity";
import Login from "./src/pages/Login";
import * as Fonts from "react-native-elements";
// const RootDrawer = DrawerNavigator(
//     {
//         Home: {
//             screen: Account,
//         },
//         // Register screens of all options of child components
//
//     },
//
// );
//
// export default class App extends React.Component {
//     render() {
//         return <RootDrawer />;
//     }
// }

//
// export default class App extends Component<{}> {
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <StatusBar
//                     backgroundColor="#ffffff"
//                     barStyle="dark-content"
//                 />
//                 <Routes/>
//                 <MyDrawerNavigator>
//
//                 </MyDrawerNavigator>
//
//             </View>
//         );
//     }
// }

export class HamburgerIcon extends Component {

    toggleDrawer=()=>{

        console.log(this.props.navigationProps);

        this.props.navigationProps.toggleDrawer();

    };

    render() {

        return (


            <View style={{flexDirection: 'row'}}>

                <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

                    <Image
                        source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
                        style={{ width: 25, height: 25, marginLeft: 5}}
                    />
                </TouchableOpacity>
            </View>

        );


    }
}
class Hidden extends React.Component {
    render() {
        return null;
    }
}


const DrawerRoutes = {

    MainStack:{
        name : 'Login',
        screen : Login,
        navigationOptions: {
            drawerLabel: <Hidden />
        }
    },
    Account: {
        name:'Account',
        screen: Account_StackNavigator
    },

    ThirdStack: {
        name:'Test',
        screen:  ThirdActivity_StackNavigator
    }
};

export default MyDrawerNavigator =
    DrawerNavigator(
        DrawerRoutes, {
            contentOptions: {
                labelStyle: {
                    fontSize: 16,
                }
            },
        },
        { headerMode: 'none' }
    );





const styles = StyleSheet.create({
    container : {
        flex: 1,
    }
});
