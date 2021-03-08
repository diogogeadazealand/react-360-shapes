import React from 'react';
import {
  Box
} from 'react-360';

export default class BoxComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
       <Box dimWidth={this.props.width} dimHeight={this.props.height} dimDepth={this.props.length} 
          style={this.props.style}/>
    );
  }
};