import {CORE_CONCEPTS} from './data.js';
import { Header } from './Components/Header/Header.jsx';
import { CoreConcept } from './Components/CoreConcept.jsx';


function App() {
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
        <h2>Time to get started!</h2>
      </main>      
    </div>
  );
}

export default App;
