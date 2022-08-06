import './mc.css'

function Membercard(props) {
    return (
        <div className="commbox" >
            <h6 className='commname'>{props.name}</h6>
            <p>{props.detail}</p>
        </div>

    )}

export default Membercard