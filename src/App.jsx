import {CORE_CONCEPTS} from './data.js';
import { Header } from './Components/Header/Header.jsx';
import { CoreConcept } from './Components/CoreConcept.jsx';
import { TabButton } from './Components/TabButton.jsx';


function App() {

  function handleClick (ComponentName) {
    console.log(ComponentName)
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
            <TabButton onSelect={() => handleClick('Components')} >Components</TabButton>
            <TabButton onSelect={() => handleClick ('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick ('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick ('State')}>State</TabButton>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>      
    </div>
  );
}

export default App;
