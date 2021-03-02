import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Sphere
  } from 'react-360';

class SphereComponent extends React.Component{
  
  render() {
    return (
      <View>
        <Sphere radius={0.5} widthSegments={20} heightSegments={12}  style={{ color: 'aqua', transform: [{ translateX: 0 }] }}/>
      </View>
    );
  }
};


AppRegistry.registerComponent('Example', () => Shape);