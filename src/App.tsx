import React from 'react';
import routes from './routes'
import './App.scss';

function App() { 
  return (
    <section className="App">
      <header className="App-header">
      </header>
      <section>
       {routes()}
      </section>
    </section>
  ); 
}

export default App;
