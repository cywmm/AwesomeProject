import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
        <Navigator
            initialRoute={{ title: 'My Initial Scene', index: 0 }}
            renderScene={(route, navigator) => {
              return <MyScene title={route.title} />
            }}
        />
    )
  }
}
