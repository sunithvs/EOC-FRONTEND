import './DAP.css'
import "./Coaching.css"
import Dapcommittee from '../Committee/Dapcommittee'
import hcbgImage from '../../Assets/dapcvr.jpg'
import img1 from '../../Assets/Fac/img1.jpg'
import img2 from '../../Assets/Fac/img2.jpg'
import img3 from '../../Assets/Fac/img3.jpg'
import img4 from '../../Assets/Fac/img4.jpg'


function DAPns() {
    return (
        <div>
            <div className='dapcvr' style={{
          backgroundImage: `linear-gradient(120deg,rgba(216,100,15,0.0), rgba(27,27,27,0.5)  ),url(${hcbgImage})`          
        }}>
            <div className=' daphead'>
                <div className='quotebox'>
                    <h3 className='hedwrite'>
                        "Disability need not be an obstacle to success."                
                    </h3>
                    <p className='authe'> - Stephen Hawking</p>
                </div>
            
            </div>
            </div>
            <div className='dappara'>
                <h3>
                Vision
                </h3>
                <p>To provide Higher Education for people with special needs. </p>
                

            </div>
            <div className='pointclass'>
            <h4>Mission</h4>
            <ul>
                <li>
                    To implement Central / State Government Schemes for Differently abled persons in the University.
                </li>
                <li>
                    To ensure the functionalities about specific educational needs of Differently able persons. 
                </li>
                <li>
                To monitor the implementation of the facilities provided for Differently abled persons.  
                </li>
                <li>
                To provide special devices to augment learning experiences of Differently abled persons.
                </li>
            </ul>
                
                <Dapcommittee/>

                <div>
                    <h5>FACILITIES PROVIDED FOR PHYSICALLY HANDICAPPED PERSONS</h5>
                    <p>Ramps in all buildings of the university, user friendly toilets in various departments, special facilities are arranged around 14 hostels of the University.</p>

                </div>


                           
                <div className="DAP_row"> 
                    <div className="DAP_column">
                    <img src={img1} className="DAP_IMAG" alt=""/>           
                    </div>

                    <div className="DAP_column">
                    <img src={img2} className="DAP_IMAG" alt=""/>           
                    </div>
                    <div className="DAP_column">
                    <img src={img3} className="DAP_IMAG" alt=""/>           
                    </div>

                    <div className="DAP_column">
                    <img src={img4} className="DAP_IMAG" alt=""/>           
                    </div>                    
                </div>
                
                
            </div>

        </div>
    )
}

export default DAPns;