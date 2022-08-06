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
democratic society. Specific provisions have been made to improve the status of these groups,
socially and educationally, so that they can take their rightful place in society. Representation of
the groups in All India / State / Provincial Services and equivalent positions in the private sector
is an indicator of how far the country has been successful to equip them so that they are in a
position to safeguard their own interests. In order to prepare students belonging to SC / ST/OBC
(non-creamy layer) and Minority communities to get gainful employment in Central and other
services mentioned above, Eoc will provide Coaching classes for entry in
services for SC / ST & Minorities.


    </p> 

    <h5>Webinar on Educational Concessions And Career Orientation </h5>
    

    <p>Organized by Equal Opportunity Cell on Mar 26, 2021 for CUSAT First year students, Helped students to understand more about e-grantz and other different scholarship schemes. </p>
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
