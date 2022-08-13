import "./Coaching.css"

import rem1 from '../../Assets/remedial/rem1.jpg'
import rem2 from '../../Assets/remedial/rem2.jpg'
import rem3 from '../../Assets/remedial/rem3.jpg'
import rem4 from '../../Assets/remedial/rem4.jpg'
import rem5 from '../../Assets/remedial/rem5.jpg'
import rem6 from '../../Assets/remedial/rem6.jpg'
import rem7 from '../../Assets/remedial/rem7.jpg'
import rem8 from '../../Assets/remedial/rem8.jpg'





function RemedialCoaching() {
  return (

   <div className="COAbase">
     <h3 className="COATITTLE"> Remedial Coaching </h3>
    <p className="COApara">
    As per UGC guidelines, during the XIth plan period, Remedial coaching was started in CUSAT in the year 2008. This was effectively implemented for the benefit of   SC/ST /OBC (Non –creamy layer) minorities and economically weaker section of students of various undergraduate and postgraduate programme.  An advisory committee was constituted with the Vice Chancellor as the chair and five professors as the members, for the overall monitoring and guidance. Equal opportunity cell (EOC) organizes these classes every semester with the help of faculty mentors from various departments in CUSAT.
    </p>
    <h4>Vision </h4>
    <p  className="COApara">
    Improve the academic proficiency of the students in various subjects and to raise their level of comprehension in such subjects where quantitative, Technical and laboratory works are involved. 
    </p>
    <h4>Mission </h4>
    <p  className="COApara">
    To improve the academic proficiency of the students in various subjects and to raise their level of comprehension in such subjects where quantitative, Technical and laboratory works are involved.  
    </p>



    <div className="COA_eventbase">              
      <div className="COA_row">

        <div className="COA_column">
          <img src={rem4} className="COA_IMAG" alt=""/>           
        </div>
        <div className="COA_column">
          <img src={rem2} className="COA_IMAG" alt=""/>           
        </div>
        <div className="COA_column">
          <img src={rem3} className="COA_IMAG" alt=""/>           
        </div>
        <div className="COA_column">
          <img src={rem1} className="COA_IMAG" alt=""/>           
        </div>
        <div className="COA_column">
          <img src={rem5} className="COA_IMAG" alt=""/>
        </div>
        <div className="COA_column">
          <img src={rem6} className="COA_IMAG" alt=""/>
        </div>
        <div className="COA_column">
          <img src={rem7} className="COA_IMAG" alt=""/>
        </div>
        <div className="COA_column">
          <img src={rem8} className="COA_IMAG" alt=""/>
        </div>

        
      </div>
    </div>












     
   </div>
  );
}

export default RemedialCoaching;
