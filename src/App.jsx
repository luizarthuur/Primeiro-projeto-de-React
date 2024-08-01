import { Header } from './Components/Header/Header.jsx';
import React from 'react';
import CoreConcepts from './Components/CoreConcepts.jsx';
import Examples from './Components/Header/Examples.jsx';



function App() {

  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Examples />
      </main>      
    </div>
  );
}
 
export default App;
