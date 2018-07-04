import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Bar extends Component<{}>{

    render(){
        return(
            <View style={styles.bar}>
                <View style={[styles.barItem, styles.barseparator]}>
                    <Text style={styles.barText}>My friends</Text>
                </View>

                <View style={styles.barItem}>
                    <Text style={styles.barText}>My pets</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        bar: {
            backgroundColor:'#fff',
            flexDirection: 'row'
        },

        barseparator: {
            borderRightWidth: 1,
        },

        barItem: {
            flex:1,
            padding:18,
            alignItems: 'center',

        },

        barText: {
            color: '#000',
            fontSize: 15,
            fontWeight: 'bold',
        }
});