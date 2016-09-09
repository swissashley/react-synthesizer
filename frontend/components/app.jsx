import React from 'react';
import SynthContainer from './synth/synth_container';
import RecorderContainer from './recorder/recorder_container';

class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(<div>
            <SynthContainer />
          </div>
    );
  }
}

export default App;
