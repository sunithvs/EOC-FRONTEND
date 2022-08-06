import './innovations.css'


function Photo (props) {
    function openphoto(){        
        props.openmod(props.url)
    }


    return (
      
        <div className="INOresponsive" onClick={openphoto}>
            <div className="INOgallery">
                
                    
                    
                    <div style={{backgroundImage: `url(${props.url})` 
                        }} className='INOaspectartio'>
                            
                    </div>
                              
                
                
            </div>
        </div>
    );
  }
  
  export default Photo;