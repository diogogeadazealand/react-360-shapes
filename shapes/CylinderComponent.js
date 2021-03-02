import React from 'react';
import {
    Cylinder
  } from 'react-360';

export default class CylinderComponent extends React.Component{
    render(){
        return (
                <Cylinder dimWidth={5} dimHeight={3} style={{color: 'green', transform: 
                [
                    {
                        translate: [2.5, 0, -3]
                    },
                    {
                        rotateX: 0
                    }
                ]
            }}></Cylinder>
        );
    }

}