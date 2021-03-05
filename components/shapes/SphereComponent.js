import React from 'react';
import {
    View,
    Sphere
  } from 'react-360';

export default class SphereComponent extends React.Component{ 
  
 constructor(props){
   super(props);
 }

  render() {
    return (
      <View>
        <Sphere radius={this.radius} widthSegments={this.props.segmentCount} heightSegments={this.props.segmentCount} style={this.props.style}/>
      </View>
    );
  }
};