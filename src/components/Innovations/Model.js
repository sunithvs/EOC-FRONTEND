
import './innovations.css'
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      width:'80%',
      height:'80%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0,0,0,0)',
      border: 'none',
      borderRadius:0,

    }
  };
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.7)';

function Model(props) {

    return (
        <>
            
            <Modal style={customStyles} isOpen={props.show}   onRequestClose={props.onHide}   >
                        <div onClick={props.onHide} className='INOclosebtn'>Close (X)</div>
                       <img className='INOmodelimg' src={props.url} alt='' />
                       
            </Modal>
        </>
    );
  }
  
  export default Model;