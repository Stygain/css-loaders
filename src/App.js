import React from 'react';
import PulseBar1 from './loaders/pulseBar1.js';
import PulseBar2 from './loaders/pulseBar2.js';
import PulseBubble1 from './loaders/pulseBubble1.js';
import PulseBubble2 from './loaders/pulseBubble2.js';
import Ripple from './loaders/ripple.js';
import Rect1 from './loaders/rect1.js';

function App() {
  return (
    <div>
      <PulseBar1 />
      <PulseBar2 />
      <PulseBubble1 />
      <PulseBubble2 />
      <Ripple />
      <Rect1 />
    </div>
  );
}

export default App;
