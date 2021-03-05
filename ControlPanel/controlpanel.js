import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Plane,
    VrButton
  } from 'react-360';

export default class ControlPanel extends React.Component{ 

  _DebugFunction = () => {
    console.log("Debug!")
  }
  
  render() {
    return (
      <View>
        <Plane dimWidth={4} dimHeight={4} style={{color: 'white', transform: [
            {translate: [-5, 0, 0]},
            {rotateX: 0},
            {rotateY: 45}
        ]}}>
          <Text style={styles.heading}>Hello World</Text>
          <VrButton onClick={this._DebugFunction}>
            <Text style={styles.button}>Debug</Text>
          </VrButton>
        </Plane>
      </View>
    );
  }

  
};


const styles = StyleSheet.create({
  heading: {
    color: 'black'
  },
  button: {
    color: 'black'
  }
});