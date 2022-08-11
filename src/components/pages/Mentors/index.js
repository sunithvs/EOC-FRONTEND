import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function MentorCard({name, designation, image, area_or_expertise}) {
    return (
        <div className="card m-1" style={{width: "15rem"}}>
            <img className="card-img-top" src={image} style={{aspectRatio: "1"}} alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{designation}</p>
                <p className="card-text">{area_or_expertise}</p>
            </div>
        </div>
    );
}

export default function Mentors() {
    const [mentors, setMentors] = useState([]);

    const types = ["Faculty", "Alumni", "Student", "Other"]

    const {mentorType} = useParams()

    console.log(mentorType)

    useEffect(() => {
        fetch(process.env.REACT_APP_API + `mentor/`)
            .then(response => response.json())
            .then(setMentors);
    }, []);

    return (
        <div className="p-5 pt-3">
            {types.map((t) =>
                <div key={t} hidden={mentorType !== t}>

                    <h4>{t==="Other"?"Other Disciplines":t}</h4>
                    <div className="d-flex flex-row justify-content-evenly flex-wrap">
                        {mentors.filter(({type}) => t === type).map(({id, name, designation, image, area_or_expertise}) =>
                            <MentorCard designation={designation} name={name} image={image} key={id} area_or_expertise={ area_or_expertise}/>
                        )}
                    </div>
                    <hr/>
                </div>
            )}
        </div>
    )
}
