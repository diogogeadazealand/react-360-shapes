import React from 'react';
import {
    Plane
  } from 'react-360';

export default class PlaneComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
                <Plane dimWidth={this.props.width} dimHeight={this.props.height} style={this.props.style}></Plane>
        );
    }

}