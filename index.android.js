/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';

import ListViewByImge from './demo/ListViewByImae';
import ListViewByTextView from './demo/ListViewByTextView'
import MyScene from './demo/MyScene'

class ListViewBasics extends Component {
    render() {
        return (
            // <ListViewByTextView />
            // <ListViewByImge />
            <Navigator
                initialRoute={{title: '标题', index: 0}}
                renderScene={(route, navigator) =>
                    <MyScene
                        title={route.title}

                        // Function to call when a new scene should be displayed
                        onForward={ () => {
                            const nextIndex = route.index + 1;
                            navigator.push({
                                title: '第' + nextIndex + '页',
                                index: nextIndex,
                            });
                        }}

                        // Function to call to go back to the previous scene
                        onBack={() => {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                    />
                }
            />
        )
    }
}
AppRegistry.registerComponent('AwesomeProject', () => ListViewBasics);
