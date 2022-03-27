import React from 'react';
import TextFieldControl from './components/TextField/textFieldControl'
import SelectBoxControl from './components/SelectBox/selectBoxControl'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='title'>
        Reusable Components
      </div>
      <TextFieldControl />
      <SelectBoxControl />
    </div>
  );
}

export default App;
