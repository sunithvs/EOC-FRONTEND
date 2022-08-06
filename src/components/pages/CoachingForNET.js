import "./Coaching.css"
import net1 from '../../Assets/netcoaching/net1.jpg'
import net2 from '../../Assets/netcoaching/net2.jpg'

function CoachingForNET() {
  return (

    <div className="COAbase">
     <h3 className="COATITTLE">NET Coaching</h3>
    <p className="COApara">

    NET coaching is a Scheme of UGC for the benefit of SC/ST /OBC (Non –creamy layer), minorities and economically weaker section students. UGC and CSIR NET Coaching classes are conducted by EOC every year jointly with Employment Guidance Bureau, CUSAT. The infrastructure facilities and professional trainers are provided by the Employment Guidance Bureau. Many students from the state of Kerala are benefitted by this coaching.
    
    </p>   

    <div className="COA_eventbase">              
      <div className="COA_row"> 

        <div className="COA_column">
          <img src={net1} className="COA_IMAG" alt=""/>           
        </div>

        <div className="COA_column">
          <img src={net2} className="COA_IMAG" alt=""/>           
        </div>

      </div>
    </div>



     
   </div>
    
  );
}

export default CoachingForNET;
