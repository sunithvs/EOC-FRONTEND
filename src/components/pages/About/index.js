import {useParams} from "react-router-dom";

function SOCEAbout() {
    return (
        <div className='soce_main'>
            <h3 className='socetittle'>SKILL ORIENTATION CENTRE FOR ENGINEERING (SOCE), CUSAT</h3>
            <p>The Skill Orientation Centre for Engineering (SOCE) under Skill and Personality Development programme for
                SC/ST students (SPDP scheme of AICTE) was established in Cochin University of Science and Technology in
                the year 2019. SOCE started its training programmes from 02.05.2019 onwards. SOCE is working as a
                central facility of Cochin University of Science and Technology. Under this scheme various training
                programmes for developing software skills ( (C++, EXCEL), Communicative English , Web Designing, App
                development, video editing and soft skill development were conducted. Faculty mentors and other trained
                students are the main supporters of this programme. The Programme Evaluation Committee (PEC) is closely
                Monitoring and guiding the activities of all SOCE programmes. </p>


            <div className='socebase'>

                <div className='soceleft'>
                    <h4>Objective of SOCE</h4>
                    <ul>
                        <li>Provide soft Skill training and Personality development programmes to improve their
                            communication skills and competence.
                        </li>
                        <li>To improve their problem-solving skills, IT skills, creativity and team work.</li>
                        <li>To organize orientation programmes, skill-oriented workshops, technical sessions and
                            coaching for various engineering subjects.
                        </li>
                        <li>To increase the creativity level become more productive.</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

function EOCAbout() {
    return (<div className='soce_main'>
            <h3 className='socetittle'>EQUAL OPPORTUNITY CELL (EOC), CUSAT</h3>
            <p>The EQUAL OPPORTUNITY CELL (EOC) under Skill and Personality Development programme for
                SC/ST students (SPDP scheme of AICTE) was established in Cochin University of Science and Technology in
                the year 2019. SOCE started its training programmes from 02.05.2019 onwards. EOC is working as a
                central facility of Cochin University of Science and Technology. Under this scheme various training
                programmes for developing software skills ( (C++, EXCEL), Communicative English , Web Designing, App
                development, video editing and soft skill development were conducted. Faculty mentors and other trained
                students are the main supporters of this programme. The Programme Evaluation Committee (PEC) is closely
                Monitoring and guiding the activities of all EOC programmes. </p>


            <div className='socebase'>

                <div className='soceleft'>
                    <h4>Objective of EOC</h4>

                    <ul>
                        <li>
                            To implement various programmes and schemes for SC/ST/OBC (Non-Creamy layer) /Women
                            /Physically handicraft/Minority students of CUSAT.
                        </li>
                        <li>
                            To provide counselling and mentoring with respect to academic and non-academic matters.
                        </li>
                        <li>
                            To provide diversability within the campus.
                        </li>


                    </ul>

                </div>
            </div>
        </div>
    );
}

export default function About() {
    const {org} = useParams()

    return (org === "SOCE" ? <SOCEAbout/> : <EOCAbout/>);
}
