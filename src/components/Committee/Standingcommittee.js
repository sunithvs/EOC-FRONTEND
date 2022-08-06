import Infocard from '../Membercard/Infocard'
import Mcpic from '../Membercard/Mcpic'
import './committee.css'


import vc1 from '../../Assets/vc1.jpg'
import pvc1 from '../../Assets/image4.jpg'
import sabu from '../../Assets/image6.jpg'
import renjith from '../../Assets/image7.jpg'
import honey from '../../Assets/image8.jpg'
import mohammed from '../../Assets/image9.jpg'
import manoj from '../../Assets/image10.jpg'
import sam from '../../Assets/image11.jpg'
import kailasnath from '../../Assets/image12.jpg'



function Standingcommittee() {
    return (
        <div className ='Dapcomm Standingspacer'>
            <h3 className='socememberline'>Advisory Committee</h3>
        <div className='commbase'>
            <div className='commsubboc MOB_FLEX_COLMN'>

            <Mcpic  imgURL ={vc1} name="Prof. (Dr.) K.N. Madhusoodanan" des="Vice – Chancellor, CUSAT" detail="Chairman" />
            <Mcpic  imgURL ={pvc1} name="Prof. (Dr.) Sasi Gopalan" des="Head, Department of Mathematics & the Coordinator, EOC, CUSAT" detail="Member Secretary" />

            {
                (window.innerWidth>768)&&(
                    <Infocard  name ="" des="" detail=""/>
                )
            }
            
            

            
            
            </div>
            
        </div>
        <h5 className='socememberline'>Members</h5>
        <div className='commbase'>
            <div className='commsubboc MOB_FLEX_COLMN'>

            
            <Mcpic  imgURL ={sabu} name="Dr. Sabu M.K" des="Professor, Department of Computer Applications, CUSAT" detail="" />
            <Mcpic  imgURL ={renjith} name="Dr. V.R. Renjith" des="Professor, Division of Safety and Fire Engineering, School of Engineering, CUSAT" detail="" />
            <Mcpic  imgURL ={honey} name="Dr. Honey John" des="Professor, Department of Polymer Science and Rubber Technology,CUSAT" detail="" />
            <Mcpic  imgURL ={mohammed} name="Dr. Mohammed Hatha" des="Professor,Department of Marine Biology, Micro Biology and Bio Chemistry, CUSAT" detail="" />
            

             
            </div>
            <div className='commsubboc MOB_FLEX_COLMN'>
            <Mcpic  imgURL ={manoj} name="Dr. Manoj .N" des="Professor, Department of Applied Chemistry, CUSAT " detail="" />
            <Mcpic  imgURL ={sam} name="Dr. Sam Thomas" des="Professor, School of Management Studies, CUSAT" detail="" />
            <Mcpic  imgURL ={kailasnath} name="Dr. Kailasnath .M" des="Professor, International School of Photonics, CUSAT" detail="" />
           
            <Infocard  name ="" des="" detail=""/>
            
            </div>
            
        

            
            
            
            
        </div>
        </div>
    )
}

export default Standingcommittee;