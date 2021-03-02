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

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Geometry', () => Geometry);