import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Sphere
} from 'react-360';
import SphereComponent from './shapes/SphereComponent';
import PlaneShape from './shapes/plane'
import BoxComponent from './shapes/boxComponent'

export default class Geometry extends React.Component {
  render() {
    return (
      <View>
        <PlaneShape></PlaneShape>
        <SphereComponent></SphereComponent>
        <BoxComponent></BoxComponent>
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
