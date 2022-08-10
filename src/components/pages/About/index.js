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

function AssociateAbout() {
    return (<div className='soce_main'>
            <h3 className='socetittle'>ASSOCIATING INSTITUTIONS</h3>
            <h3 className='socetittle'>CREST</h3>
            <p>CREST is an autonomous organization under the Government of Kerala with the mentoring support from
                the Indian Institute of Management Kozhikode, which incubated the Centre of Excellence, the predecessor
                institution of the CREST and the National Institute of Advanced Studies (NIAS) Bangalore. The Governing
                Council headed by the Minister for the Welfare of Scheduled and Backward Communities, Kerala as Chairman
                monitors the activities of the Centre. Dignitaries like the Governor of Kerala, Chief Minister of Kerala
                and the Speaker of the Kerala Legislative Assembly are the patrons of this Autonomous institution.
                The Governing Council has representation from institutions like Indian Institute of Management Kozhikode,
                National Institute of Advanced Studies. </p>



            <h3 className='socetittle'>The University Employment Information and Guidance Bureau</h3>
                        <p>The University Employment Information and Guidance Bureau
                        attached with Cochin University of Science and Technology came into existence on
                        10.01.1973. This is the joint venture of the University and National Employment Service
                        (Kerala) Department. The Chief of the Bureau is nominated by the Vice Chancellor of
                        the University and the Deputy Chief of the Bureau is an Employment Officer of National
                        Employment Service (Kerala) Department, nominated by the Director of Employment.
                        Bureau is situated at Common Facility Centre in the main campus of CUSAT.
                        It has two class rooms and a career library having more than thousand career related
                        reference books. Over these years the bureau has made a mark for itself in organizing a
                        range of programmes aimed at developing individual competencies in self-knowledge,
                        educational and occupational exploration and career planning. The bureau has been fairly
                        successful in disseminating Occupational and Vocational Information to the student community
                        both within the CUSAT campus and outside </p>

            <h3 className='socetittle'>Department of Youth Welfare CUSAT</h3>
            <p>Department of Youth Welfare is a formal platform in the University to design and implement
                youth policy which includes the issues related to motivation, participation, promotion and
                socio-economic and cultural settings within which young people grow up. The Department is
                acting as a supporting force for the students and youth community to epitomize their academic
                excellence through doing and learning. The Department is conducting short-term training
                programmes in the areas of arts, soft skills and personality development with an objective of
                achieving 5 C’s – Competence, Creativity, Confidence and Compassion and Communication.</p>

            <h3 className='socetittle'>College of Engineering Munnar</h3>
            <p>College of Engineering Munnar is an Institute of higher learning established by Government of
                Kerala and is managed by the Center for Continuing Education Kerala ( CCEK ). The Institution
                started in the year 2000 was affiliated to Cochin University of Science and Technology and is
                affiliated to APJ Abdul Kalam Technological University Kerala from 2015 admission onwards.
                The college is approved by All India Council for Technical Education (AICTE), New Delhi.
                The Chairman of the Governing Body of the institution is the Hon’ble Minister for Education,
                Government of Kerala and the Vice-Chairman is the Additional Chief Secretary (Higher Education)
                Government of Kerala.</p>

            <h3 className='socetittle'>College of Engineering Trivandrum</h3>
            <p>The College of Engineering Trivandrum, commonly known as CET, is the first engineering college
                in Kerala, situated in Thiruvananthapuram, the capital city of Kerala. It was founded in 1939
                during the reign of the Travancore King, Chithira Thirunal Balarama Varma. CET has always been
            a constant piller of support and an enthusiastic participator in all our activities. </p>




        </div>
    );
}

export default function About() {
    const {org} = useParams()
    if (org === "SOCE")
        return <SOCEAbout/>
    else if (org === "EOC") return <EOCAbout/>
    return <AssociateAbout/>
}
