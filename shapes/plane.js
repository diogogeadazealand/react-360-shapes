import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Plane
  } from 'react-360';

export default class PlaneShape extends React.Component{

    planeDimentions = {
        width: 10,
        height: 10
    }

    render(){
        return (
                <Plane dimWidth={10} dimHeight={10} style={{color: 'purple', transform: [
                    {translate: [0, -5, -3]},
                    {rotateX: -90}
                ]}}></Plane>
        );
    }

}