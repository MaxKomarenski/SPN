import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text, AsyncStorage,
} from 'react-native';

export default class Header extends Component<{}>{

    constructor(){
        super();
        this.state = {
            name: ''
        }
    }

    updateName = async () => {
        this.setState({name: await AsyncStorage.getItem("name")})
    };

    componentDidMount(){

        this.updateName();
    }

    render(){
        return(
            <View style={styles.header}>

                <View style={styles.pictureWrapper}>

                    <Image style={styles.picture} source={require('../img/human.jpg')}/>

                </View>

                <Text style={styles.name}>{this.state.name}</Text>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        backgroundColor:'#fff'
    },
    pictureWrapper: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: '#e6e4e5',
        borderWidth: 5,
    },
    picture: {
        flex:1,
        width:null,
        alignSelf:'stretch',
        borderRadius:100,
        borderColor:'#fff',
        borderWidth:4,
    },
    name: {
        marginTop: 5,
        fontSize:22,
        color:'#000',
        fontWeight:'bold',
    }
});