// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location} from 'react-360-web';
import shapeModule from './modules/shapeModule';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new shapeModule()
    ],
    ...options,
  });

const location = new Location([0,0,-2]);
  // Render your app content to the default cylinder surface
  r360.renderToLocation(
    r360.createRoot('AdvancedShape', {state: state}),
    location
  );


  r360.renderToSurface(
    r360.createRoot('AdvancedSurface', {test: state}),
    r360.getDefaultSurface()
  )
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('watercolor_world.jpg'));
}

const state = {
  curShape: ""
};

window.React360 = {init};
