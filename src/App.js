import React from 'react';
import ResponsiveNav from './components/navbar/ResponsiveNav'
import Footer from '../src/components/Footer/Footer'

import Home from './components/pages/Home/Home'
import CoachingPrograms from './components/pages/CoachingForNET'
import Contact from './components/pages/Contact'
import Gallery from './components/pages/Gallery'
import Innovations from './components/Innovations/Innovations'
import PEC from './components/pages/PEC'
import Soce from './components/pages/Soce'
import DAPns from './components/pages/DAPns'
import Standingcommittee from "./components/Committee/Standingcommittee";
import RemedialCoaching from "./components/pages/RemedialCoaching"
import CoachingForEntryIntoService from "./components/pages/CoachingForEntryIntoService"
import CoachingForNET from "./components/pages/CoachingForNET"
import Feedback from "./components/pages/Feedback"
import SocePrograms from "./components/pages/Soceprograms"



import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>

      <ResponsiveNav/>

        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/AdvisoryCommittee'  component={Standingcommittee} />
          <Route path='/CoachingPrograms'  component={CoachingPrograms} />
          <Route path='/Contact'  component={Contact} />
          <Route path='/Gallery'  component={Gallery} />
          <Route path='/Innovations'  component={Innovations} />
          <Route path='/SOCE'  component={Soce} />
          <Route path='/ProgramEvaluationCommitiee'  component={PEC} />
          <Route path='/DifferentiallyAbledPersons' component={DAPns} />
          <Route path='/StandingCommittee' component={Standingcommittee} />
          <Route path='/RemedialCoaching' component={RemedialCoaching} />
          <Route path='/CoachingForEntryIntoService' component={CoachingForEntryIntoService} />
          <Route path='/CoachingForNET' component={CoachingForNET} />
          <Route path='/Feedback' component={Feedback} />
          <Route path='/SocePrograms' component={SocePrograms}/>

        </Switch>

        <Footer/>
    </Router>


  );
}

export default App;
