import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js';
import { Header } from './Components/Header/Header.jsx';
import { CoreConcept } from './Components/CoreConcept.jsx';
import { TabButton } from './Components/TabButton.jsx';
import React from 'react';
import { EXAMPLES } from './data-with-examples.js';


function App() {

  const [selectedTopic, setSelectedTopic ] = useState();

  let tabContent = <p>Please Select a Topic</p>

  if (selectedTopic) {
    tabContent = (<div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code> 
        </pre>
        </div>
        )
  }  

  function handleClick (ComponentName) {
    return (
    console.log(ComponentName),
    setSelectedTopic(ComponentName))
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
            title = {CORE_CONCEPTS[0].title} 
            description= {CORE_CONCEPTS[0].description}
            img = {CORE_CONCEPTS[0].image} >
            </CoreConcept>

            <CoreConcept 
            title = {CORE_CONCEPTS[1].title} 
            description= {CORE_CONCEPTS[1].description}
            img = {CORE_CONCEPTS[1].image} >
            </CoreConcept>

            <CoreConcept 
            title = {CORE_CONCEPTS[2].title} 
            description= {CORE_CONCEPTS[2].description}
            img = {CORE_CONCEPTS[2].image} >
            </CoreConcept>

            <CoreConcept 
            title = {CORE_CONCEPTS[3].title} 
            description= {CORE_CONCEPTS[3].description}
            img = {CORE_CONCEPTS[3].image} >
            </CoreConcept>
          </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')} >Components</TabButton>
            <TabButton onSelect={() => handleClick ('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick ('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick ('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
        <h2>Time to get started!</h2>
      </main>      
    </div>
  );
}

export default App;
