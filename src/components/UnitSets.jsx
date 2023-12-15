import React from 'react'
import { useState } from 'react';
import './UnitSets.css'

export default function UnitSets() {

    let SI={};
    const [temperatureUnit, setTemperatureUnit] = useState('Celsius');
    const [pressureUnit, setPressureUnit] = useState('bar');
    const [timeUnit,setTimeUnit]= useState('hr');
    const [lengthUnit,setLengthUnit]= useState('m');
    const [areaUnit,setAreaUnit]= useState('m2');
    const [volumeUnit,setVolumeUnit]= useState('m3');

  function showbtn(){
    SI={
        temperature:temperatureUnit,
        pressure:pressureUnit,
        time:timeUnit,
        length:lengthUnit,
        area:areaUnit,
        volume:volumeUnit
    }

    console.log(SI +"the real show btn cmd");
  }

  return (
    <div>
       
       <h3 >
       Please specify the units for the following parameters
       </h3>

       
      <div className='UnitSet-body'>
        
        <div className='Indi-Unit'>
        <label className='Unit-name'>
          Temperature:
        </label>
       
      
        <select onChange={(e) => setTemperatureUnit(e.target.value)} id="Temp-unit">
    <option value="celsius">Celsius</option>
    <option value="fahrenheit">Fahrenheit</option>
        </select>
        </div>

        <div className='Indi-Unit'>
        <label className='Unit-name'>
          Pressure:
        </label>
       
      
        <select onChange={(e) => setPressureUnit(e.target.value)} id="Pressure-unit">
    <option value="bar">bar</option>
    <option value="atm">atm</option>
    <option value="kg/cm2">kg/cm2</option>
        </select>
        </div>


        <div className='Indi-Unit'>
        <label className='Unit-name'>
          Time:
        </label>
       
      
        <select onChange={(e) => setTimeUnit(e.target.value)}  id="Time-unit">
    <option value="hr">hr</option>
    <option value="min">min</option>
    <option value="sec">sec</option>
    
        </select>
        </div>

        <div className='Indi-Unit'>
        <label className='Unit-name'>
          Length:
        </label>
       
      
        <select onChange={(e) => setLengthUnit(e.target.value)} id="Length-unit">
    <option value="m">m</option>
    <option value="cm">cm</option>
    <option value="mm">mm</option>
    
        </select>
        </div>

        <div className='Indi-Unit'>
        <label className='Unit-name'>
          Area:
        </label>
       
      
        <select onChange={(e) => setAreaUnit(e.target.value)} id="Area-unit">
    <option value="m2">m2</option>
    <option value="cm2">cm2</option>
    <option value="mm2">mm2</option>
    
        </select>
        </div>

        <div className='Indi-Unit'>
        <label className='Unit-name'>
          Volume:
        </label>
       
      
        <select onChange={(e) => setVolumeUnit(e.target.value)} id="Volume-unit">
    <option value="m3">m3</option>
    <option value="cm3">cm3</option>
    <option value="mm3">mm3</option>
    
        </select>
        </div>

        <button onClick={showbtn()}>Save Units</button>


      </div>

    
    </div>
  )
}
