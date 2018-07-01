import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';


import Routes from './src/Routes';
// import FetchExample from './src/FetchExample';

export default class App extends Component<{}> {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#ffffff"
                    barStyle="dark-content"
                />
                <Routes/>
                {/*<FetchExample/>*/}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    }
});
