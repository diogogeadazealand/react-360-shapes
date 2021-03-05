import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Plane
} from 'react-360';
import SphereComponent from './shapes/SphereComponent';
import PlaneShape from './shapes/plane'
import BoxComponent from './shapes/boxComponent'
import CylinderComponent from './shapes/CylinderComponent';
import ControlPanel from './ControlPanel/controlpanel';

export default class Geometry extends React.Component {
  render() {
    return (
      <View>
        <ControlPanel></ControlPanel>
        <PlaneShape></PlaneShape>
        <SphereComponent></SphereComponent>
        <BoxComponent></BoxComponent>
        <CylinderComponent></CylinderComponent>
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
