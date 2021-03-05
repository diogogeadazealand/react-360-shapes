import React from 'react'
import { NativeModules } from 'react-native';
import { View, Text, VrButton, StyleSheet } from 'react-360';

const shapeModule = NativeModules.shapeModule;

export default class AdvancedSurface extends React.Component{

    styles = StyleSheet.create({
        panel: {
          // Fill the entire surface
          width: 300,
          height: 600,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          justifyContent: 'center',
          alignItems: 'stretch',
          padding: 30
        },
        title: {
            color: "rgba(0,0,0,1)",
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 30
        },
        button: {
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: '#000000',
          marginBottom: 10
        },
        highlight: {
            borderWidth: 2,
            borderColor: "rgb(0, 0, 0)",
            backgroundColor: '#fff',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
            marginBottom: 10
        },
        highlightText: {
            color: "#000",
            fontWeight: "bold"
        },
        text: {
            color: "rgba(255,255,255,1)",
            fontWeight: "bold"
        }
      });

    shapes = {
        cube: {name: "Cube"},
        parallelepiped: {name: "Parallelepiped"},
        sphere: {name: "Sphere"},
        cylinder: {name: "Cylinder"},
        squarePlane: {name: "Plane (square)"},
        rectPlane: {name: "Plane (rectangle)"},
    }

    constructor(props)
    {
        super(props);
        this.state = {
            curShape: {name: ""}
        };

        shapeModule.curShape = this.state.curShape;
        this.ChangeShape = this.ChangeShape.bind(this);
    }

    ChangeShape(shape){
        this.setState({curShape: shape});
        shapeModule.ChangeShape(shape);
    }

    render(){
        return (
            <View>
                <View style={this.styles.panel}>
                    <Text style={this.styles.title}>Shapes</Text>
                    {
                        Object.keys(this.shapes).map( (shape, index) => 

                            <VrButton 
                                onClick={() => this.ChangeShape(this.shapes[shape])} 
                                key={"button_"+index} 
                                style={(this.state.curShape.name == this.shapes[shape].name) ? this.styles.highlight : this.styles.button}
                            >
                                <Text 
                                    style={(this.state.curShape.name == this.shapes[shape].name) ? this.styles.highlightText : this.styles.text} 
                                    key={"text_"+index}
                                    >{this.shapes[shape].name}</Text>
                            </VrButton>
                        )
                    }
                </View>
            </View>
        );
    }

}