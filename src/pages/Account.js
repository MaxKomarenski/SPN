import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import AccountHeader from '../components/AccountHeader';
import InfoPanel from '../components/InfoPanel';
import Bar from '../components/Bar';
import PhotoGrid from '../components/PhotoGrid'

export default class Account extends Component<{}>{

    render(){
        return(
            <View style={styles.container}>
                <AccountHeader/>
                <InfoPanel title="A Panel with short content text">
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</Text>
                </InfoPanel>
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