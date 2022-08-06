import './committee.css'
import Infocard from '../Membercard/Infocard'
import Mcpic from "../Membercard/Mcpic";
import img1 from '../../Assets/image1.jpg'
import img2 from '../../Assets/image2.jpg'
import img3 from '../../Assets/image3.jpg'
import img4 from '../../Assets/image4.jpg'
import img5 from '../../Assets/image5.jpg'



function Socecommittee() {
    return (
        <div className='socecomm'>
            <h3 className='socememberline'>Committee</h3>
            <div className='socecommsubboc' >
                <Mcpic  imgURL ={img2} name="V MEERA" des="Chair Person " detail="Registrar, CUSAT" />
                <Mcpic  imgURL ={img4} name="Dr.Sasi Gopalan" des="Coordinator" detail="Professor in Mathematics, CUSAT" />
                {
                    (window.innerWidth>768)&&(
                        <Infocard  name ="" des="" detail=""/>
                    )
                }
                
                

            </div>
            <h5 className='socememberline'>Members</h5>

                {
                    (window.innerWidth>768)&&(
                        <div className='socecommsubboc'>
                        <Mcpic  imgURL ={img1} name="Prof. (Dr.) Honey John" des="" detail="Dept. of Polymer & Rubber Technology, CUSAT" />
                        <Mcpic  imgURL ={img3} name="Prof. (Dr.) Radhakrishna Panicker M.R" des="" detail="Div. of Mechanical Engineering, SOE, CUSAT" />
                        <Mcpic  imgURL ={img5} name="Dr. Deepa G Nair" des="" detail="Div. of Civil Engineering, SOE, CUSAT" />                    
                        </div>   

                    )
                }
                {
                    (window.innerWidth<768)&&(
                        <>
                        <div className='socecommsubboc'>
                        <Mcpic  imgURL ={img1} name="Prof. (Dr.) Honey John" des="" detail="Dept. of Polymer & Rubber Technology, CUSAT" />
                        <Mcpic  imgURL ={img3} name="Prof. (Dr.) Radhakrishna Panicker M.R" des="" detail="Div. of Mechanical Engineering, SOE, CUSAT" />
                        </div>   
                        <div className='socecommsubboc'>                        
                        <Mcpic  imgURL ={img5} name="Dr. Deepa G Nair" des="" detail="Div. of Civil Engineering, SOE, CUSAT" />                    
                        </div>   
                        </>

                    )


                }

                     
            
            
        </div>
    )
}

export default  Socecommittee;