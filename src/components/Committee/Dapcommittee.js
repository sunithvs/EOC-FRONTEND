import Membercard from '../Membercard/Membercard'
import './committee.css'
function Dapcommittee() {
    return (
        <div className ='Dapcomm'>
            <h4>Committee Members</h4>
        <div className='commbase'>
            <div className='DAPcommsubboc'>
            <Membercard  name ="Dr.Sabu M.K" detail="Associate Professor &  Head, Department of Computer Applications, CUSAT, (Faculty)"/>
            <Membercard  name ="Dr.Biju.N" detail="Professor,  Division of Mechanical  Engineering, School of Engineering CUSAT (Faculty)"/>
            <Membercard  name ="Dr.Mini Sekharan" detail=" Assistant Professor, Industrial Fisheries, CUSAT  (Faculty)"/>
            
             
            </div>
            <div className='DAPcommsubboc'>
            <Membercard name ="Smt.Jaya Prabha" detail="Associate Professor in IT, Cochin University College of Engineering, Kuttanad. (Faculty)t"/>

            <Membercard name ="Nazar Saidumohammed" detail="Section Officer, School of Legal Studies, CUSAT (Non Teaching)"/>
            <Membercard name ="Sachin Das" detail="Electrical & Electronics Engineering, School of Engineering, CUSAT(Student)"/>
            
                         




            
            
               
            </div>
            <div className='DAPcommsubboc'>
            <Membercard name ="Prajul K.V" detail="NAGSB, Department of Ship Technology, B.Tech, VIII Semester,  Member, Syndicate, CUSAT (Student)"/>   
            <Membercard name ="Sangamitra" detail="I Semester BBA LLB School of Legal studies (Student)"/>             
            <Membercard name ="Venu.M.K" detail="(Parent), c/o SreejitVenu, Division of Computer Science, School of Engineering, CUSAT"/>   
            
            
            </div>
            <div className='DAPcommsubboc'>
            <Membercard name ="Girivasan P.T" detail="(Parent), c/o Arundhadhi P.G, Division of Computer Science, School of Engineering, CUSAT"/>
            <Membercard name ="" detail=""/>
            <Membercard name ="" detail=""/>
            </div>
            
            
            
        </div>
        </div>
        
    )}

    export default Dapcommittee;
    
