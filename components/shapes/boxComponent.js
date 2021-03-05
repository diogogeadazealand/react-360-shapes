import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Box
} from 'react-360';

export default class BoxComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
       <Box dimWidth={this.props.width} dimHeight={this.props.height} dimDepth={this.props.length} 
          style={this.props.style}/>
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