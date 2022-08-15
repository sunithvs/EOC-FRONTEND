import {useParams} from "react-router-dom";
import Mcpic from "../../Membercard/Mcpic";
import img2 from "../../../Assets/image2.jpg";
import img4 from "../../../Assets/image4.jpg";
import Infocard from "../../Membercard/Infocard";
import img1 from "../../../Assets/image1.jpg";
import img3 from "../../../Assets/image3.jpg";
import img5 from "../../../Assets/image5.jpg";
import vc1 from "../../../Assets/vc1.jpg";
import pvc1 from "../../../Assets/image4.jpg";
import sabu from "../../../Assets/image6.jpg";
import renjith from "../../../Assets/image7.jpg";
import honey from "../../../Assets/image8.jpg";
import mohammed from "../../../Assets/image9.jpg";
import manoj from "../../../Assets/image10.jpg";
import sam from "../../../Assets/image11.jpg";
import kailasnath from "../../../Assets/image12.jpg";


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
<div className='socecomm'>
            <h3 className='socememberline'>Program Evaluation Committee (PEC)</h3>
            <div className='socecommsubboc' >
                <Mcpic  imgURL ={img2} name="Dr.V MEERA" des="Chair Person PEC & " detail="Registrar, CUSAT" />
                <Mcpic  imgURL ={img4} name="Prof.(Dr.)Sasi Gopalan" des="Coordinator SOCE & Member Secretary PEC" detail="Dept of Mathematics, CUSAT" />
                <Mcpic  imgURL ={img1} name="Prof. (Dr.) Honey John" des="" detail="Dept. of Polymer Science & Rubber Technology, CUSAT" />
                <Mcpic  imgURL ={img3} name="Prof. (Dr.) Radhakrishna Panicker M.R" des="" detail="Div. of Mechanical Engineering, SOE, CUSAT" />
                <Mcpic  imgURL ={img5} name="Prof. (Dr.) Deepa G Nair" des="" detail="Div. of Civil Engineering, SOE, CUSAT" />
                {
                    (window.innerWidth>768)&&(
                        <Infocard  name ="" des="" detail=""/>
                    )
                }



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
<div className ='Dapcomm Standingspacer'>
            <h3 className='socememberline'>Advisory Committee</h3>
        <div className='commbase'>
            <div className='commsubboc MOB_FLEX_COLMN'>

            <Mcpic  imgURL ={vc1} name="Prof. (Dr.) K.N. Madhusoodanan" des="Vice – Chancellor, CUSAT" detail="Chairman" />
            <Mcpic  imgURL ={pvc1} name="Prof. (Dr.) Sasi Gopalan" des="Head, Department of Mathematics & the Coordinator, EOC, CUSAT" detail="Member Secretary" />

            {
                (window.innerWidth>768)&&(
                    <Infocard  name ="" des="" detail=""/>
                )
            }





            </div>

        </div>
        <h5 className='socememberline'>Members</h5>
        <div className='commbase'>
            <div className='commsubboc MOB_FLEX_COLMN'>


            <Mcpic  imgURL ={sabu} name="Dr. Sabu M.K" des="Professor, Department of Computer Applications, CUSAT" detail="" />
            <Mcpic  imgURL ={renjith} name="Dr. V.R. Renjith" des="Professor, Division of Safety and Fire Engineering, School of Engineering, CUSAT" detail="" />
            <Mcpic  imgURL ={honey} name="Dr. Honey John" des="Professor, Department of Polymer Science and Rubber Technology,CUSAT" detail="" />
            <Mcpic  imgURL ={mohammed} name="Dr. Mohammed Hatha" des="Professor,Department of Marine Biology, Micro Biology and Bio Chemistry, CUSAT" detail="" />



            </div>
            <div className='commsubboc MOB_FLEX_COLMN'>
            <Mcpic  imgURL ={manoj} name="Dr. Manoj .N" des="Professor, Department of Applied Chemistry, CUSAT " detail="" />
            <Mcpic  imgURL ={sam} name="Dr. Sam Thomas" des="Professor, School of Management Studies, CUSAT" detail="" />
            <Mcpic  imgURL ={kailasnath} name="Dr. Kailasnath .M" des="Professor, International School of Photonics, CUSAT" detail="" />

            <Infocard  name ="" des="" detail=""/>

            </div>







        </div>
        </div>
    )
}




        </div>
    );
}

function AssociateAbout() {
    return (<div className='soce_main'>
            <h3 className='socetittle'>ASSOCIATING INSTITUTIONS</h3>
            <h3 className='socetittle'>CREST-Centre for Research & Education for Social Transformation</h3>
            <p>CREST is an autonomous organization under the Government of Kerala with the mentoring support from
                the Indian Institute of Management Kozhikode, which incubated the Centre of Excellence, the predecessor
                institution of the CREST and the National Institute of Advanced Studies (NIAS) Bangalore. The Governing
                Council headed by the Minister for the Welfare of Scheduled and Backward Communities, Kerala as Chairman
                monitors the activities of the Centre. CREST has always been a constant support to us many programs
            were conducted by EOC and SOCE in association with CREST.</p>

            <h3 className='socetittle'>College of Engineering Trivandrum</h3>
            <p>The College of Engineering Trivandrum, commonly known as CET, is the first engineering college
                in Kerala, situated in Thiruvananthapuram, the capital city of Kerala. It was founded in 1939
                during the reign of the Travancore King, Chithira Thirunal Balarama Varma. CET has always been
            a constant piller of support and an enthusiastic participator in all our activities. </p>


            <h3 className='socetittle'>College of Engineering Munnar</h3>
            <p>College of Engineering Munnar is an Institute of higher learning established by Government of
                Kerala and is managed by the Center for Continuing Education Kerala ( CCEK ). The Institution
                started in the year 2000 was affiliated to Cochin University of Science and Technology and is
                affiliated to APJ Abdul Kalam Technological University Kerala from 2015 admission onwards.
                College of Engineering Munnar have helped us in conducting many programs</p>



            <h3 className='socetittle'>The University Employment Information and Guidance Bureau</h3>
                        <p>The University Employment Information and Guidance Bureau
                        attached with Cochin University of Science and Technology came into existence on
                        10.01.1973. This is the joint venture of the University and National Employment Service
                        (Kerala) Department. We conducted a number of programs including net coaching and
                            career development </p>

            <h3 className='socetittle'>Department of Youth Welfare CUSAT</h3>
            <p>Department of Youth Welfare is a formal platform in the University to design and implement
                youth policy which includes the issues related to motivation, participation, promotion and
                socio-economic and cultural settings within which young people grow up. The Department is
                acting as a supporting force for the students and youth community to epitomize their academic
                excellence through doing and learning. The Department is conducting short-term training
                programmes in the areas of arts, soft skills and personality development with an objective of
                achieving 5 C’s – Competence, Creativity, Confidence and Compassion and Communication. </p>







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
