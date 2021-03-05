import React from 'react';
import {
    Cylinder
  } from 'react-360';

export default class CylinderComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
                <Cylinder dimWidth={this.props.width} dimHeight={this.props.height} style={this.props.style}></Cylinder>
        );
    }

}