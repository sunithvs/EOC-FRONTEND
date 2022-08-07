import "./soce.css"

import SoceImages from './SoceImages'
import {useEffect, useState} from "react";

function SocePrograms() {

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API + "programs?type=SOCE")
            .then(response => response.json())
            .then(setPrograms);
    }, [])

    return (
        <div className="PRO_BASE">

            <h3>Programs Under SOCE</h3>
            <p>Skill Orientation Centre for Engineering (SOCE), CUSAT is a Central facility funded by skill and
                Personality Development Programme Centre (SPDC) for SC/ST Engineering students funded by AICTE. The
                Centre will conduct Soft Skill Development programmes benefitted for SC/ST Engineering students of
                CUSAT. The Centre is established in the year 2019 for a period of 3 years. The scheme is beneficial for
                SC/ST Engineering students to empower and reorient themselves in the current merging opportunities.</p>
            <h5>Recent Acitivties: </h5>

            {!programs && <h4>Loading...</h4>}
            {programs.map(() => (
                <div className="PRO_eventbase">
                    <h5>C++ Training for students</h5>
                    <p>C++ is one of the important low level language for programming.Having a basic understanding of the
                        C++ can help students to understand most of the programming and help them analize problems
                        logically.</p>
                    <div className="PRO_row">

                        <div className="PRO_column">
                            <img src={SoceImages.cpp1} className="PRO_IMAG" alt=""/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SocePrograms;
