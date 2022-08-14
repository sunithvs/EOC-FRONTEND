import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from './logo.png'
import Mobilenav from './Mobilenav'

function Navbar() {
    return (
        <div>
            <div className="navbody">
                <img className='Navlogo' src={logo} alt="CUSAT"/>
                <div className='LeftNavbox'>
                    <Link className='nounderline' to='/'>
                        <div className="Tittle">
                            <div className="nounderline">
                                Equal Opportunity Cell
                            </div>
                            <div className="SubTittle">
                                CUSAT
                            </div>

                        </div>

                    </Link>
                </div>
                <div className='RightNavbox'>

                    <Link className='nounderline whitebutton' to='/Feedback'>
                        <div>Student Feedback</div>
                    </Link>

                    <Link className='nounderline whitebutton' to='/Innovations'>
                        <div>Innovation</div>
                    </Link>
                     <Link className='nounderline whitebutton' to='/Future_plans'>
                        <div>Future Plans</div>
                    </Link>

                </div>
            </div>
            <Mobilenav/>

        </div>

    );
}

export default Navbar;
