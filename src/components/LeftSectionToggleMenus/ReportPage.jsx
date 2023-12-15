import React from 'react'
import '../LeftSection.css'
import { GoDiamond } from "react-icons/go";
import ImageleftSide from './EseemaLogo.png'


export default function ReportPage() {
  return (
    <div>
    <div className='Outer-div'>
<div className='Left-Body'>
   <div>
   <img className='LeftImage-class'  src={ImageleftSide} alt="" srcset="" />
    <h5 className='h5-menus'>Home</h5>
    <h5 className='h5-menus' >Standard Reports</h5>
    <h5 className='h5-menus'>Export Results</h5>
    <h5 className='h5-menus'>Custom Reports</h5>
    
   </div>


    <div className='Lower-leftsection'>
            <div className='Lower-leftsection-internals'>
             <div className='Lower-leftsection-internals-leftsection' >
             <h4 className='Lower-menu-btn'>R</h4>
              <h5>Report</h5>
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
