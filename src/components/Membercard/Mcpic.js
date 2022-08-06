import './mc.css'

function Mcpic(props) {
    return (
        <div className='commboxpic'>
            <img className="compic" src={props.imgURL} alt ='memberphoto'/>
            <h6 className='nOMAR'>{props.name}</h6>
            <p className ='socememmarginedit'>{props.des}</p>
            <p className ='socememmarginedit' >{props.detail}</p>
        </div>
    )
}

export default  Mcpic;