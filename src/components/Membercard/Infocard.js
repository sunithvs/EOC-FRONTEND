import './mc.css'

function Infocard(props) {
    return (
        <div className='commboxpic'>            
            <h6 className='nOMAR'>{props.name}</h6>
            <p className ='socememmarginedit'>{props.des}</p>
            <p className ='socememmarginedit' >{props.detail}</p>
        </div>
    )
}

export default  Infocard;