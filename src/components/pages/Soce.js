
import './soce.css'
import Socecommittee from '../Committee/Socecommittee'

function Soce() {
  return (
          <div className='soce_main'>
        <h3 className='socetittle'>SKILL ORIENTATION CENTRE FOR ENGINEERING (SOCE), CUSAT</h3>
        <p>The Skill Orientation Centre for Engineering (SOCE) under Skill and Personality Development programme for SC/ST students (SPDP scheme of AICTE) was established in Cochin University of Science and Technology in the year 2019.  SOCE started its training programmes from 02.05.2019 onwards.  SOCE is working as a central facility of Cochin University of Science and Technology.  Under this scheme various training programmes for developing software skills ( (C++, EXCEL), Communicative English ,  Web Designing, App development, video editing and soft skill development were conducted.  Faculty mentors and other trained students are the main supporters of this programme.  The Programme Evaluation Committee (PEC) is closely Monitoring and guiding the activities of all SOCE programmes. </p>
        
        
        <div className='socebase'>

          <div className='soceleft'>
          <h4>Objective of SOCE</h4>
          <ul>          
            <li>Provide soft Skill training and Personality development programmes to improve their communication skills and competence.</li>
            <li>To improve their problem-solving skills, IT skills, creativity and team work.</li>
            <li>To organize orientation programmes, skill-oriented workshops, technical sessions and coaching for various engineering subjects.</li>
            <li>To increase the creativity level become more productive.</li>
          </ul>

          </div>

          <div className='soceright'>

          
         
          </div>

        </div>
        <div className='soceADV'>
          <h4>Advantages of Skill Orientation Centre in CUSAT</h4>
          <ul>
            <li>Improving communication skills both in verbal and written.</li>
            <li>Creating a way of Self employment </li>
            <li>Becoming students more productive and self sufficient</li>
            <li>Increasing proficiency in English Language</li>
            <li>Increasing knowledge capacity</li>
            <li>Increasing confidence tends to appear competitive exams.</li>

            
          </ul>
          <Socecommittee/>
        </div>

        </div>

   
  );
}

export default Soce;
