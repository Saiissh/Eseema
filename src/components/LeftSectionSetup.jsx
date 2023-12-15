import React from 'react'
import './LeftSection.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UnitSets from './UnitSets';
import SetupPage from './LeftSectionToggleMenus/SetupPage'
import AnalyticsPage from './LeftSectionToggleMenus/AnalyticsPage';
import ReportPage from './LeftSectionToggleMenus/ReportPage';
import DataPage from './LeftSectionToggleMenus/DataPage';
export default function LeftSection() {

  // function fun(){
  //   console.log("printed");
  // }
 

  
  return (
    // <Router>
    
   <div>
    <SetupPage />
    {/* <AnalyticsPage /> */}
    {/* <ReportPage /> */}
    {/* <DataPage /> */}

   </div>
  )
}
