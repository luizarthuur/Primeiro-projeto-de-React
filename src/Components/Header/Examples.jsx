import { useState } from "react";
import { EXAMPLES } from '../../data-with-examples.js';
import { TabButton } from "./../TabButton.jsx";
import { Section }  from "../Section.jsx";
import { Tabs } from "../tabs.jsx";

export default function Examples () {

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
        <>
        <Section title = "Examples" id = "examples">
          <Tabs 
           buttons = 
           { <> <TabButton isSelected={selectedTopic === 'components' ? true : undefined} onClick={() => handleClick('components')} >Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx' ? true : undefined} onClick={() => handleClick ('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props' ? true : undefined} onClick={() => handleClick ('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state' ? true : undefined} onClick={() => handleClick ('state')}>State</TabButton> </>}
          >{tabContent}</Tabs>
      </Section>
      <h2>Time to get started!</h2>
      </>
    )
}