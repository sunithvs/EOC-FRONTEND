import './innovations.css'


function Event(props) {

    function openeventdetail() {
        props.openeventdetail(props.data)
    }


    return (

        <div className="INOresponsive" onClick={openeventdetail}>
            <div className="INOgallery INOunderline">


                <div style={{
                    backgroundImage: `url(${props.data.image})`
                }} className='INOaspectartio'>

                </div>

                <div className="INOdesc">{props.data.name}</div>
                <p>{props.data.short_desc}</p>
            </div>
        </div>
    );
}

export default Event;