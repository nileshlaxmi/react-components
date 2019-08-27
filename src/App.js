import React from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip';

function App() {
  return (
    <div className="App">
        <p data-tip="hover" data-for='tooltip'>Tooltip on Hover
          <ReactTooltip place="right" type="light" id="tooltip">
            Help
          </ReactTooltip>  
        </p>
        <p>For more reference, click <a href="https://github.com/wwayne/react-tooltip" target="blank">Tooltip Guide</a></p>
    </div>
  );
}

export default App;
