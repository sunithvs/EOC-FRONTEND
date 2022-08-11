import "./soce.css"

import {useEffect, useState} from "react";

function SocePrograms() {

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API + "programs?type=SOCE")
            .then(response => response.json())
            .then(setPrograms);
    }, []);

    return (
        <div className="PRO_BASE">

            <h3>Programs Under SOCE</h3>
            <p>Skill Orientation Centre for Engineering (SOCE), CUSAT is a Central facility funded by skill and
                Personality Development Programme Centre (SPDC) for SC/ST Engineering students funded by AICTE. The
                Centre will conduct Soft Skill Development programmes benefitted for SC/ST Engineering students of
                CUSAT. The Centre is established in the year 2019 for a period of 3 years. The scheme is beneficial for
                SC/ST Engineering students to empower and reorient themselves in the current merging opportunities.</p>
            <h3>Upcoming Project </h3>
            <h4>XR Lab Cusat</h4>
            <p>Extended reality lab in the Skill Orientation Centre for Engineering (SOCE), CUSAT as its extension
                proposed by Prof(Dr.) Sasi Gopalan, Department of mathematics (  Mentor & Coordinator SOCE) aims
                at prototyping human interaction to make the future more better and human centred by creating
                advancements in computer vision, augmented reality and virtual reality. The advancements
                in this field indicate that the XR lab will be the next pervasive platform for communication,
                experimentation, and work via the replacement of current hardware into a Virtual, Augmented,
                and Mixed reality Library. Our goal is to develop innovative, impactful research and applications
                in VR, AR and CV by establishing collaborations with industry partners and academia.
                With pioneering research, XRC will find new ways through invention and innovation to
                make an impact today while paving the way for the future.


</p>

            {!programs && <h4>Loading...</h4>}
            {programs.map(({name, longDesc, image, images}) => (
                <div className="PRO_eventbase">
                    <h5>{name}</h5>
                    <p>{longDesc}</p>
                    <div className="PRO_row">
                        {image &&
                            <div className="PRO_column">
                                <img src={image} className="PRO_IMAG" alt={name}/>
                            </div>
                        }
                        {images.map(({images}) =>
                            <div className="PRO_column">
                                <img src={images} className="PRO_IMAG" alt={name}/>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SocePrograms;
