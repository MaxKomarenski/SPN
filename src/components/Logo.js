import React, { Component } from 'react';
import {
    Text,
    Image,
    StyleSheet,
    View
} from 'react-native';

export default class Logo extends Component<{}>{
    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={{width:70, height:70}}
                    source={require('../img/logo.png')}/>
                <Text style={styles.logoText}>SPN</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow:1,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    logoText : {
        fontSize: 20,
        color: '#000000'
    }
});