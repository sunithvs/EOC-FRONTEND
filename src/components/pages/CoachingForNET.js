import "./Coaching.css"
import net1 from '../../Assets/netcoaching/net1.jpg'
import net2 from '../../Assets/netcoaching/net2.jpg'
import rem3 from '../../Assets/netcoaching/rem3.JPG'
import rem4 from '../../Assets/netcoaching/rem4.JPG'
import rem5 from '../../Assets/netcoaching/rem5.JPG'
import rem10 from '../../Assets/netcoaching/rem10.JPG'
import rem11 from '../../Assets/netcoaching/rem11.JPG'
import net5 from '../../Assets/netcoaching/net5.JPG'

function CoachingForNET() {
  return (

    <div className="COAbase">
     <h3 className="COATITTLE">NET Coaching</h3>
    <p className="COApara">

    NET coaching is a Scheme of UGC for the benefit of SC/ST /OBC (Non –creamy layer), minorities and
        economically weaker section students. EOC jointly with Employment Guidance Bureau, CUSAT is conducting UGC-CSIR
        Net coaching programme for the benefit of students in Kerala.
        . The infrastructure facilities and  the trainers are provided by the Employment Guidance Bureau CUSAT.

    
    </p>   

    <div className="COA_eventbase">              
      <div className="COA_row"> 

        <div className="COA_column">
          <img src={net1} className="COA_IMAG" alt=""/>           
        </div>

        <div className="COA_column">
          <img src={net2} className="COA_IMAG" alt=""/>           
        </div>
         <div className="COA_column">
          <img src={rem3} className="COA_IMAG" alt=""/>
        </div>
         <div className="COA_column">
          <img src={rem4} className="COA_IMAG" alt=""/>
        </div>
         <div className="COA_column">
          <img src={rem5} className="COA_IMAG" alt=""/>
        </div>
         <div className="COA_column">
          <img src={rem10} className="COA_IMAG" alt=""/>
        </div>
         <div className="COA_column">
          <img src={rem11} className="COA_IMAG" alt=""/>
        </div>
           <div className="COA_column">
          <img src={net5} className="COA_IMAG" alt=""/>
        </div>

      </div>
    </div>



     
   </div>
    
  );
}

export default CoachingForNET;
