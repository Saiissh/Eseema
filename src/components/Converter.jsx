import React, { Component } from 'react'
import './Converter.css'
export class Converter extends Component {
    
  render() {
    function convertTemperature() {
        // Get the user input and selected unit
        var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
        var unit = document.getElementById("unitSelector").value;

        // Perform the conversion
        var convertedTemperature = (unit === "celsius") ? (temperatureInput ) : (temperatureInput *9/5) +32 ;

        // Update the result in the text field
        document.getElementById("result").value = convertedTemperature;
    }


    return (
      <div>
        <h2>
            Temperature Converter

            
        </h2>

        <div className='temp-input'>
        <label for="temperatureInput">Enter Temperature:</label>
        <input type="number" id="temperatureInput" />

        <label for="unitSelector">Select Unit:</label>
        <select id="unitSelector">
    <option value="celsius">Celsius</option>
    <option value="fahrenheit">Fahrenheit</option>
        </select>

        <button onClick={convertTemperature}> Convert</button>

        <label  for="result">Converted Temperature:</label>
        <input type="text" id="result" ></input>
        </div>
        
      </div>
    )
  }
}

export default Converter
