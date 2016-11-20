import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';

export default class MyScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.itemView}>
                    <TouchableHighlight style={styles.button} onPress={this.props.onBack}>
                        <Text style={styles.buttonText}>返回</Text>
                    </TouchableHighlight>
                    <Text style={styles.instructions}>{ this.props.title }</Text>
                </View>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>下一页</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    itemView: {
        flexDirection:'row',
        height: 50,
        width:width,
        backgroundColor: '#3F51B5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        // backgroundColor: '#48BBEC',
        // borderColor: '#48BBEC',
        // borderWidth: 1,
        // borderRadius: 8,
        // marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    instructions: {
        textAlign: 'center',
        color: '#FFFFFF'
    },
});

MyScene.propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};
