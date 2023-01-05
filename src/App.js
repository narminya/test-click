import React from 'react';
import { useLongPress } from 'use-long-press';
function App() {

  const bind = useLongPress(() => {
    console.log('Long pressed!');
  });
  return (
    <div className="App">
      <button className="myButton" {...bind()}>Press me</button>
    </div>
  );
}

export default App;
