import React from 'react'
import { useState } from 'react'
export default function Dropdown() {
 
    const [selectedNames, setSelectedNames] = useState([]);
  const [currentName, setCurrentName] = useState('');
  const names = ['ethane', 'methane', 'propane','butane','pentane','hexane'];

  const handleNameChange = (event) => {
    setCurrentName(event.target.value);
  };

  const handleAddName = () => {
    if (currentName && !selectedNames.includes(currentName)) {
      setSelectedNames([...selectedNames, currentName]);
      setCurrentName('');
    }
  };

    
    return (
        
        <div>
        <select value={currentName} onChange={handleNameChange}>
          <option value="" disabled>
            Select components
          </option>
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <button onClick={handleAddName}>Add </button>
  
        <div>
          <h2>Selected Components:</h2>
          <ul>
            {selectedNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
  
  )
}
