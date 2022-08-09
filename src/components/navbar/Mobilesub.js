import React, {Component} from 'react';
import './mobilenav.css'

import {Link} from 'react-router-dom';
import {List, XLg} from 'react-bootstrap-icons';

class Mobilesub extends Component {

    state = {
        open: false
    };

    handleMenu = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div className='MOBTOPMARGIN'>
                <div className='MOBmenu' onClick={this.handleMenu}>
                    <h4 className='MOBHead'> EOC CUSAT</h4>
                    {
                        (!this.state.open) && <List className='MENUICON' size={40}/>
                    }
                    {
                        (this.state.open) && <XLg className='MENUICON MOBSMALL' size={30}/>
                    }
                </div>
                {this.menu()}
            </div>
        )
    }

    menu() {
        if (this.state.open) {
            return (
                <div className='MOBOPEN_BAR'>
                    <ul className='MOBMENUBAR' onClick={() => this.setState({open: false})}>
                        <li className='MOBbuttonbox'><Link className='MOBNAVnounderline MOBMAINLIST' to='/'> Home</Link>
                        </li>
                        <li className='MOBbuttonbox'><Link className='MOBNAVnounderline MOBMAINLIST'
                                                           to='/AdvisoryCommittee'>Committee</Link></li>
                        <li className='MOBbuttonbox'><Link className='MOBNAVnounderline MOBMAINLIST'
                                                           to='/DifferentiallyAbledPersons'>Differently Abled
                            Person</Link></li>
                        <li>
                            <p className='MOBMENUTITTLE MOBMAINLIST'> Coaching Programs</p>
                            <ul className='MOBMENUBAR'>
                                <li className='MOBbuttonbox'><Link className='MOBNAVnounderline '
                                                                   to='/RemedialCoaching'>Remedial Coaching</Link></li>
                                <li className='MOBbuttonbox'><Link className='MOBNAVnounderline '
                                                                   to='/CoachingForEntryIntoService'>Coaching For Entry
                                    Into Service</Link></li>
                                <li className='MOBbuttonbox'><Link className='MOBNAVnounderline ' to='/CoachingForNET'>Coaching
                                    For NET</Link></li>
                            </ul>
                        </li>
                        <li>
                            <p className='MOBMENUTITTLE'><Link className='MOBNAVnounderline MOBMAINLIST'
                                                               to='/SOCE'>SOCE</Link></p>
                            <ul className='MOBMENUBAR'>
                                <li className='MOBbuttonbox'><Link className='MOBNAVnounderline'
                                                                   to='/SocePrograms'>Programs</Link></li>
                            </ul>
                        </li>
                        <li className='MOBbuttonbox'><Link className='MOBNAVnounderline MOBMAINLIST'
                                                           to='/Innovations'>Innovation</Link></li>
                        <li className='MOBbuttonbox'><Link className='MOBNAVnounderline MOBMAINLIST'
                                                           to='/About'>About</Link></li>
                        <li className='MOBbuttonbox'><Link className='MOBNAVnounderline MOBMAINLIST'
                                                           to='/Gallery'>Gallery</Link></li>
                        <li className='MOBbuttonbox'><Link className='MOBNAVnounderline MOBMAINLIST'
                                                           to='/Contact'>Contact</Link></li>
                        <li>
                            <p className='MOBMENUTITTLE'><Link className='MOBNAVnounderline MOBMAINLIST'
                                                               to='/SOCE'>Mentors</Link></p>
                            <ul className='MOBMENUBAR'>
                                <li className='MOBbuttonbox'><Link className='MOBNAVnounderline'
                                                                   to='/Mentors/Faculty'>Faculty</Link></li>
                                <li className='MOBbuttonbox'><Link className='MOBNAVnounderline'
                                                                   to='/Mentors/Alumni'>Alumni</Link></li>
                                <li className='MOBbuttonbox'><Link className='MOBNAVnounderline'
                                                                   to='/Mentors/Student'>Student</Link></li>
                            </ul>
                        </li>
                        <li className='MOBbuttonbox'><Link className='MOBNAVnounderline MOBMAINLIST'
                                                           to='/Feedback'>Feedback</Link></li>
                    </ul>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }

    }

}

export default Mobilesub;
