import React from 'react'
import '../LeftSection.css'
import { GoDiamond } from "react-icons/go";
import ImageleftSide from './EseemaLogo.png'

export default function DataPage() {
  return (
    <div>
    <div className='Outer-div'>
<div className='Left-Body'>
   <div>
   <img className='LeftImage-class'  src={ImageleftSide} alt="" srcset="" />
    <h5 className='h5-menus'>Home</h5>
    <h5 className='h5-menus' >Fuel</h5>
    <h5 className='h5-menus'>Record Operation</h5>
    <h5 className='h5-menus'>Predict Emission</h5>
    
   </div>


    <div className='Lower-leftsection'>
            <div className='Lower-leftsection-internals'>
             <div className='Lower-leftsection-internals-leftsection' >
             <h4 className='Lower-menu-btn'>D</h4>
              <h5>Data</h5>
             </div>
              {/* <GoDiamond onClick={fun} className='LowerSection-ToggleLogo' /> */}
              <div style={{ cursor: 'pointer' }}>
                        <GoDiamond className='LowerSection-ToggleLogo' />
              </div>
            </div>
      </div>
</div>
 </div>
    </div>
  )
}
