import './Navbar.css';
import {Link} from 'react-router-dom';
import {CaretRightFill} from 'react-bootstrap-icons';

function Mobilenav() {

    return (
        <div className='Submenu'>
            <Link to='/' className='HOME aligntext buttoneff'>
                Home
            </Link>


            <Link className='ADVISORY aligntext buttoneff' to='/AdvisoryCommittee'> Advisory Committee</Link>


            <Link to='/DifferentiallyAbledPersons' className='PWD aligntext buttoneff'>
                Differently Abled Persons
            </Link>
            <div className='COACHING aligntext'>

                <div className="dropdown">
                    <button className="dropbtn">Programs Under EOC</button>
                    <div className="dropdown-content">
                        <Link className='nounderline' to='/RemedialCoaching'><CaretRightFill/> Remedial Coaching</Link>
                        <Link className='nounderline' to='/CoachingForNET'><CaretRightFill/> NET Coaching</Link>
                        <Link className='nounderline' to='/CoachingForEntryIntoService'><CaretRightFill/> Coaching For
                            Entry Into Service</Link>
                    </div>
                </div>
            </div>
            <div className='SOCE aligntext'>
                <div className="dropdown">
                    <Link className='nounderline buttoneff' to='/SOCE'>
                        <button className="dropbtn">
                           Programs under SOCE
                        </button>
                    </Link>
                    <div className="dropdown-content">
                        <Link className='nounderline' to='/SocePrograms'><CaretRightFill/> Programs</Link>
                    </div>
                </div>
            </div>

            <div className='SOCE aligntext'>
                <div className="dropdown">
                    <Link className='nounderline buttoneff' to='/Mentors'>
                        <button className="dropbtn">
                            About
                        </button>
                    </Link>
                    <div className="dropdown-content">
                        <Link className='nounderline' to='/About/SOCE'><CaretRightFill/>SOCE</Link>
                        <Link className='nounderline' to='/About/EOC'><CaretRightFill/>EOC</Link>
                        <Link className='nounderline' to='/About/associating_institution'><CaretRightFill/>Associating Institution</Link>
                    </div>
                </div>
            </div>

            <Link to='/Gallery' className='GALLERY aligntext buttoneff'>
                Gallery
            </Link>
            <div className='SOCE aligntext'>
                <div className="dropdown">
                    <Link className='nounderline buttoneff' to='/Mentors'>
                        <button className="dropbtn">
                            Mentors
                        </button>
                    </Link>
                    <div className="dropdown-content">
                        <Link className='nounderline' to='/Mentors/Faculty'><CaretRightFill/>Faculty</Link>
                        <Link className='nounderline' to='/Mentors/Alumni'><CaretRightFill/>Alumni</Link>
                        <Link className='nounderline' to='/Mentors/Student'><CaretRightFill/>Student</Link>
                        <Link className='nounderline' to='/Mentors/Other'><CaretRightFill/>Other Discipline</Link>
                    </div>
                </div>
            </div>
            <Link to='/Contact' className='CONTACT aligntext buttoneff'>
                Contact
            </Link>
        </div>

    );

}

export default Mobilenav;
