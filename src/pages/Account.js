import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Header from '../components/Header';
import Bar from '../components/Bar';
import PhotoGrid from '../components/PhotoGrid'


export default class Account extends Component<{}>{

    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <Bar/>
                <PhotoGrid/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    }
});