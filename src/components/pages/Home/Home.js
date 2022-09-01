import Carouselin from '../../Carousel/Carouselin'
import './home.css'

import News from '../../News/News'
import headimg from '../../../Assets/headimg.jpg'
import logocusat from '../../../Assets/logocusat.jpg'

function Home() {

    return (

        <div>
            <div className='home_page_marquee'>
                <div className="marque">
                    <p>
                        Implemented Unlock- A digitally controlled door lock, in SOCE CUSAT. | Organized Workshop HackIt
                        2022
                    </p>
                </div>
            </div>
            <Carouselin/>

            <div className='obj '>

                <div className='leftflex '>

                    <div className='homeheadbox'>

                        <div className='homehead'>

                            {(window.innerWidth > 768) &&
                                <h2 style={{fontFamily: 'Cinzel'}}><img width={75} height={100} src={logocusat}
                                                                        alt=""/> Welcome to Equal Opportunity Cell CUSAT
                                </h2>
                            }
                            <p>
                                -Funded by University Grant Commission and was established in Cochin University
                                of Science and Technology (CUSAT) in the year 2007.
                            </p>

                            {(window.innerWidth < 769) &&
                                <>
                                    <h2>
                                        Equal Opportunity Cell CUSAT
                                    </h2>
                                </>

                            }

                            <h5>
                                "Focusing to the marginalized for learning and creating space for them to the main
                                stream."
                            </h5>


                            <div className='parabox'>

                                <div className="LeftparaBOX">
                                    <h4>Vision</h4>
                                    <p>
                                        To advance equality through technology.

                                    </p>
                                </div>

                            </div>

                            <div className='parabox  mt-3'>

                                <div className="LeftparaBOX">
                                    <h4>Missions</h4>
                                    <p>
                                        To conduct specific coaching benefitted for Scheduled Castes, Scheduled Tribes,
                                        OBC (Non-creamy layer), Minorities, Women, Physically Challenged Persons, to
                                        enhance their employability level and carrier Opportunities.
                                    </p>

                                </div>

                                <img className="RightparaBOX mt-4" src={headimg} alt="cvr"/>

                            </div>

                        </div>

                    </div>
                    <div className='objectiClass mt-3'>
                        <h4>Objectives </h4>

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

                        <h4>Function </h4>

                        <ul>
                            <li>
                                To organize Remedial Coaching Programmer for UG/PG level students for their improvements
                                in academic and communication skills.
                            </li>
                            <li>
                                To conduct training programmes to strengthen their quantitative, qualitative and
                                laboratory skills.
                            </li>
                            <li>
                                To coordinate hands on programme to strengthen their confidences such that to reduce
                                failure and dropouts.
                            </li>
                            <li>
                                To sensitize University about the problems of marginalized sections of the society.
                            </li>
                            <li>
                                To improve the overall performance of the students not only in academics but also in
                                other spheres of life.
                            </li>
                            <li>
                                To sensitize the main stream sections of the society towards the problem of the
                                marginalized sections of the society.
                            </li>
                            <li>
                                To monitor various schemes/ policies of the central / state government relating to the
                                marginalized sections
                            </li>
                            <li>
                                To ensure effective function of UGC cell for SC/ST in the campus.
                            </li>
                            <li>
                                To become an effective tool for gender sensitization and ensure participation in all
                                socially relevant activities of the University
                            </li>


                        </ul>

                    </div>


                </div>


                <div className='rightflex'>

                    <div className='mainbox eventbox'>
                        <div className='eventtittlebox'>
                            <h2 className='evenhead'>EVENTS / NEWS </h2>
                        </div>
                        <div className="NotLimit">
                            <News/>
                        </div>


                    </div>

                </div>

            </div>


        </div>
    );
}

export default Home;
