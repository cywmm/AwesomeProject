/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View ,Image} from 'react-native';

class ListViewBasics extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        this.state = {
            dataSource: ds.cloneWithRows([
                pic, pic, pic, pic, pic, pic, pic, pic
            ])
        };
    }
    render() {
        var Dimensions = require('Dimensions');
        var { width, height } = Dimensions.get('window');
        return (
            <View style={{flex: 1, paddingTop: 5,alignItems:'center',}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                    <Image source={rowData} style={{alignItems: 'center',marginTop:5,width: width, height: 110}}/>}
                />
            </View>
        );
    }
}
AppRegistry.registerComponent('AwesomeProject', () => ListViewBasics);
