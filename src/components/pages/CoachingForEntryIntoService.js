import "./Coaching.css"
import SoceImages from './SoceImages'
import Youtube from'../Innovations/Youtube'

function CoachingForEntryIntoService() {
  return (
    <div className="COAbase">
     <h3 className="COATITTLE"> Coaching For Entry Into Service  </h3>
    <p className="COApara">
    
    The well-being and development of the Scheduled Castes (SC), Scheduled Tribes (ST), OBC
(non-creamy layer) and Minorities are important indicators of the strength and success of a
democratic society. Specific provisions have been made to improve their status
socially and educationally, so that they can take their rightful place in the society. Representation of
these groups in All India / State / Provincial Services and equivalent positions in the private sector
can be ensured through this programme. In order to prepare students belonging to SC / ST/OBC
(non-creamy layer) and Minority communities to get gainful employment in Central and other
services mentioned above, Eoc provides Coaching programmes for entry into
services.


    </p> 

    <h5>Webinar on Educational Concessions And Career Orientation </h5>
    

    <p>In connection with entry into service programmes, Equal Opportunity Cell organises webinar on educational
        concessions in the beginning of every academic year.
        This helps students to understand more about e-grantz and other different scholarship schemes.
    Images of the webinar conducted online during COVID period is attached below.</p>
    <h6 className='COAwatchlink' onClick={()=>window.open("https://youtu.be/nCghPEEsDq8")}> Click here to Watch Full video on Youtube  </h6>
    <div className="COA_eventbase">              
      <div className="COA_row"> 

        <div className="COA_column">
          <img src={SoceImages.entimg1} className="COA_IMAG" alt=""/>           
        </div>

        <div className="COA_column">
          <img src={SoceImages.entimg2} className="COA_IMAG" alt=""/>           
        </div>

        <div className="COA_column">
          <img src={SoceImages.entimg3} className="COA_IMAG" alt=""/>           
        </div>

        <div className="COA_column">
          <img src={SoceImages.entimg4} className="COA_IMAG" alt=""/>           
        </div>

        <div className="COA_column">
          <img src={SoceImages.entimg5} className="COA_IMAG" alt=""/>           
        </div>

        <div className="COA_column">
          <img src={SoceImages.entimg6} className="COA_IMAG" alt=""/>           
        </div>

        <div className="COA_column">
          <img src={SoceImages.entimg7} className="COA_IMAG" alt=""/>           
        </div>

        <div className="COA_column">
          <img src={SoceImages.entimg9} className="COA_IMAG" alt=""/>           
        </div>

      </div>
    </div >


    


    <Youtube url = "https://www.youtube.com/embed/nCghPEEsDq8"/>

   </div>
  );
}

export default CoachingForEntryIntoService;
