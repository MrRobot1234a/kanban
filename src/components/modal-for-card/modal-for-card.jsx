// React-redux components
import { useDispatch } from 'react-redux'

//Actions
import {
  deleteCard
} from '../../store/boardsSlice'

//React components
// import { useState } from 'react'

//Bootstrap components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// CSS
import './modal-for-card.css'

function ModalForCard({show, handleClose, keyCard, boardId}) {

  const dispatch = useDispatch()
  const deleteCardd = () => {
    dispatch(deleteCard({keyCard, boardId}))
    handleClose()
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        contentClassName={'dark-theme'}
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          Are you sure you want to delete this task?
        </Modal.Body>
        <Modal.Footer>
          <button className='btn-for-modal' onClick={handleClose} >Close</button>
          <Button className='btn-for-modal__success' onClick={deleteCardd} variant="success">Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForCard;