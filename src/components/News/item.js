import './viewnesw.css'
const Item = (props)=>{

    function openlink(){
        window.open(props.elink,'_self')
    }


    
    return(
        
        <li key={props.iKey}  className='endevent' onClick={openlink} >
                 
                  <h6>
                   {props.name}
                  </h6>
                  <p className="nomarginbott">
                  {props.desc}
                  </p>
                  
                  
                </li>
                
    )
}
export default Item