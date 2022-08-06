import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from './logo.png'
import Mobilenav from './Mobilenav'
function Navbar() {

  if(!(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
    console.log("%cDeveloped by Sachin And Prasanth in 2021", "background-color:black;border-left: solid red 8px;color:white;padding:10px;border-radius:5px")
    console.log("%c https://www.linkedin.com/in/sachindas246\nhttps://www.linkedin.com/in/prasanth-sivadas-6943ba228" ,"background-color:whitesmoke;border-left: solid red 8px;color:green;padding:10px;border-radius:5px")
  
  } else {
  
  }
   return (
    <div >
      
      
      <div className="navbody">
      <img className ='Navlogo' src={logo} alt="CUSAT" />
      <div className = 'LeftNavbox'>      
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
      <div className = 'RightNavbox'>

        <Link className='nounderline whitebutton' to='/Feedback' > <div>Student Feedback</div> </Link> 
        
        <Link className='nounderline orangebutton' to='/Innovations'><div  >Innovation</div></Link>
               
      </div>  
    </div>
    <Mobilenav/>
 
    </div>

    
  );
}

export default Navbar;
