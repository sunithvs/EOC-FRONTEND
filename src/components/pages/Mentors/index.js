import {useEffect, useState} from "react";

function MentorCard({name, designation, image}) {
    return (
        <div className="card m-1" style={{width: "15rem"}}>
            <img className="card-img-top" src={image} style={{aspectRatio: "1"}} alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{designation}</p>
            </div>
        </div>
    );
}

export default function Mentors() {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API + "mentor")
            .then(response => response.json())
            .then(setMentors);
    }, []);

    return (
        <div className="p-5 pt-3">
            <h4>Faculty</h4>
            <div className="d-flex flex-row justify-content-evenly flex-wrap">
                {mentors.filter(({type}) => type === "Faculty").map(({id, name, designation, image}) =>
                    <MentorCard designation={designation} name={name} image={image} key={id}/>
                )}
            </div>
            <hr/>

            <div>
                <h4>Alumni</h4>
                {mentors.filter(({type}) => type === "Alumni").map(({id, name, designation, image}) =>
                    <MentorCard designation={designation} name={name} image={image} key={id}/>
                )}
            </div>
            <hr/>

            <div>
                <h4>Student</h4>
                {mentors.filter(({type}) => type === "Student").map(({id, name, designation, image}) =>
                    <MentorCard designation={designation} name={name} image={image} key={id}/>
                )}
            </div>
        </div>
    )
}
