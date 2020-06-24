import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = React.useState('');

  return (
    <div className="container">
      <div className="input">
        <input value={value} onChange={e => setValue(e.target.value)} />
        <p>type in emojis and i'll sort them.</p>
      </div>
    </div>
  );
}

export default App;
