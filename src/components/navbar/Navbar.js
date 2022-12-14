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

                    <Link className='nounderline whitebutton m-2' to='/Feedback'>
                        <div>Student Feedback</div>
                    </Link>

                    <Link className='nounderline whitebutton m-2' to='/Innovations'>
                        <div>Innovation</div>
                    </Link>
                    <Link className='nounderline whitebutton m-2' to='/activities'>
                       <div>Activities</div>
                   </Link>

                </div>
            </div>
            <Mobilenav/>

        </div>

    );
}

export default Navbar;
