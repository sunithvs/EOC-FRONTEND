import './innovations.css'


function Youtube (props) {
    if(props.url!=="#"){
    return (

        <div className="youtube-video-container">
                            <iframe
                                title="new"
                                width="560"
                                height="315"
                                src={props.url}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
    )
}else{
    return(
        <></>
    )
    }
}

export default Youtube;

