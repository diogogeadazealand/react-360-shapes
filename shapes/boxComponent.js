import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Box
} from 'react-360';

export default class BoxComponent extends React.Component {
  render() {
    return (
      <View>
       <Box dimWidth={0.5} dimHeight={0.5} dimDepth={0.5} 
          style={{color: 'red', transform: [{translate: [-1,0,0]}]}}/>
      </View>
    );
  }
};


AppRegistry.registerComponent('BoxComponent', () => BoxComponent);