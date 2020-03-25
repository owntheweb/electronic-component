import React from 'react';
import './App.css';
import AlphanumericDisplay from '../AlphanumericDisplay';

function App() {
  return (
    <section className="App">
      <h2>An electronic component...</h2>
      <AlphanumericDisplay characters="GO COMPONENT" />
      <AlphanumericDisplay characters="HELLO     MY NAME IS          MY NAME IS          MY NAME IS          SLIM SHADY" characterCount="10" animationTime="1000" scrollAmount="10" addSpace="false" />
      <AlphanumericDisplay characters="|/-\|/-\|/-\*xO█O█o*-" characterCount="1" animationTime="70" addSpace="false" />
    </section>
  );
}

export default App;
