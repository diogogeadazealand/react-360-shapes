import React from 'react'
import { NativeModules } from 'react-native';
import { View } from 'react-360';
import { 
    SphereComponent,
    BoxComponent,
    CylinderComponent,
    PlaneComponent
} from '../shapes/shapes';

const shapeModule = NativeModules.shapeModule;

export default class AdvancedShape extends React.Component{

    shape = {
        style: { color: 'aqua', transform: [
            {translate: [0,0,0]}, {rotateX: 45}, {rotateY:45}
        ]}
    };

    event = undefined;


    constructor(props){
        super(props);

        this.state = {
            shapeComponent: () => {}
        };

        shapeModule.ChangeShape = this.ChangeShape;
        shapeModule.Rotate = this.Rotate;
    }

    ChangeShape = (shape) => {
        switch(shape.name){
            case "Cube": 
                this.setState({...this.state, shapeComponent: () => <BoxComponent style={this.shape.style}  width={0.5} height={0.5} length={0.5}></BoxComponent>});
            break;
            case "Parallelepiped":
                this.setState({...this.state, shapeComponent: () => <BoxComponent style={this.shape.style} width={1} height={0.5} length={0.5}></BoxComponent>});
            break;
            case "Sphere":
                this.setState({...this.state, shapeComponent: () => <SphereComponent style={this.shape.style} radious={0.5} segmentCount={20}></SphereComponent>});
                break;
            case "Cylinder":
                this.setState({...this.state, shapeComponent: () => <CylinderComponent style={this.shape.style}  width={0.5} height={1}></CylinderComponent>});
                break;
            case "Plane (square)":
                this.setState({...this.state, shapeComponent: () => <PlaneComponent style={this.shape.style} width={0.5} height={0.5}></PlaneComponent>});
                break;
            case "Plane (rectangle)":
                this.setState({...this.state, shapeComponent: () => <PlaneComponent style={this.shape.style} width={0.5} height={1}></PlaneComponent>});
                break;
        }
    }

    render(){
        return (
            <View>
                {this.state.shapeComponent()}
            </View>
        );
    }

}