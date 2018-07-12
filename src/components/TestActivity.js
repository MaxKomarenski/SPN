
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {StackNavigator} from "react-navigation";
import {HamburgerIcon} from "../../App";

class ThirdActivity extends Component {

    constructor(props) {

        super(props);

    }

    render()
    {
        return(

            <View style = { styles.MainContainer }>

                <Text style={{fontSize: 23}}> This is Activity - 3 </Text>

            </View>
        );
    }
}
export const ThirdActivity_StackNavigator = StackNavigator({
    Third: {
        screen: ThirdActivity,
        navigationOptions: ({ navigation }) => ({
            title: 'ThirdActivity',
            headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    },
});
const styles = StyleSheet.create({

    MainContainer :{

        flex:1,
        paddingTop: 0,
        alignItems: 'center',
        justifyContent: 'center',

    }

});