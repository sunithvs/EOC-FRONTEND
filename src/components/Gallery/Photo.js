import './gallery.css'


function Photo (props) {
    function openphoto(){        
        props.openmod(props.url)
    }


    return (
      
        <div className="responsive" onClick={openphoto}>
            <div className="gallery">
                
                    
                    
                    <div style={{backgroundImage: `url(${props.url})` 
                        }} className='aspectartio'>
                            
                    </div>
                              
                
                
            </div>
        </div>
    );
  }
  
  export default Photo;