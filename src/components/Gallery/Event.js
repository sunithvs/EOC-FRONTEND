import './gallery.css'




function Event(props) {

    function openeventdetail()
    {
        props.openeventdetail(props.data)        
    }


    return (
      
        <div className="responsive" onClick={openeventdetail}>
            <div className="gallery">
                
                    
                    
                    <div style={{backgroundImage: `url(${process.env.REACT_APP_GALLERY_API+props.data.image})` 
                        }} className='aspectartio'>
                            
                    </div>           
                
                <div className="desc">{props.data.ProgramName}</div>
            </div>
        </div>
    );
  }
  
  export default Event;