// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location} from 'react-360-web';

const location = new Location([0,0,-2]);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Geometry', { /* initial props */ }),
    location
  );

  // Load the initial environment
  r360.compositor.setBackground(asset('360_world.jpg'));
}

window.React360 = {init};
