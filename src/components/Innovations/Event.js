import './innovations.css'




function Event(props) {

    function openeventdetail()
    {
        props.openeventdetail(props.data)        
    }


    return (
      
        <div className="INOresponsive" onClick={openeventdetail}>
            <div className="INOgallery INOunderline">
                
                    
                    
                    <div style={{backgroundImage: `url(${process.env.REACT_APP_GALLERY_API+props.data.image})` 
                        }} className='INOaspectartio'>
                            
                    </div>           
                
                <div className="INOdesc">{props.data.InnovationName}</div>
                <p>{props.data.InnovationShortDesc}</p>
            </div>
        </div>
    );
  }
  
  export default Event;