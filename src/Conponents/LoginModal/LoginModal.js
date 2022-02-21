import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';
import { loginModalStyles } from './styles';


const LoginModal = ({ loginModalOpened, setLoginModalOpened }) => {
    
    

    
  return (
    <Modal
        isOpen={loginModalOpened}
        //onAfterOpen={afterOpenModal}
        onRequestClose={()=>setLoginModalOpened(false)}
        style={loginModalStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={()=>setLoginModalOpened(false)}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
  )
}

LoginModal.propTypes = {}

export default LoginModal