import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    Image,
} from 'react-native';

export default class PhotoGrid extends Component<{}>{

    render(){
        return(
            <ScrollView>
                <View style={styles.photoGrid}>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../img/dog1.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../img/dog2.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../img/dog3.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../img/dog4.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../img/dog5.jpg')}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
        photoGrid:{
            flexDirection:'row',
            flexWrap:'wrap',
        },
        photoWrap: {
            margin: 2,
            height: 130,
            width: (Dimensions.get('window').width/3) - 4,
        },
        photo:{
            flex:1,
            width:null,
            alignSelf:'stretch',
        }
});