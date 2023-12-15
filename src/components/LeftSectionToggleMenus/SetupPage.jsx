import React from 'react'
import '../LeftSection.css'
import { GoDiamond } from "react-icons/go";
import ImageleftSide from './EseemaLogo.png'
import { useEffect,useState } from 'react';

export default function SetupPage() {
  return (
    <div>
        <div className='Outer-div'>
          <div className='Left-Body'>
              <div>
                    <img className='LeftImage-class'  src={ImageleftSide} alt="" srcset="" />
                    <h5 className='h5-menus'>Home</h5>
                    <h5 className='h5-menus' >Company Information</h5>
                    <h5 className='h5-menus'>Unit Sets</h5>
                    <h5 className='h5-menus'>Estimation Method</h5>
              </div>
          
              <div className='Lower-leftsection'>
                <div className='Lower-leftsection-internals'>
                      <div className='Lower-leftsection-internals-leftsection' >
                          <h4 className='Lower-menu-btn'>S</h4>
                            <h5>Setup</h5>
                      </div>

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
