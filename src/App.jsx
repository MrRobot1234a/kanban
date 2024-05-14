// React components
import { useState } from 'react'

// Components
import Button_2 from './components/button_2/button_2'
import FieldForColumns from './components/field-for-columns/field-for-columns'
import ModalForCard from './components/modal-for-card/modal-for-card';

// CSS
import './App.css'

function App() {

  //State for modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Delete Card
  const [keyCard, setKeyCard] = useState('')
  const [boardId, setboardId] = useState('')

  function showModal(e, board, key) {
    handleShow()
    setKeyCard(key)
    setboardId(board)
  }

  return (

    <div className='container'>

      <ModalForCard
        show={show}
        handleClose={handleClose}
        keyCard={keyCard}
        boardId={boardId}
         />

      <Button_2>Get random activity</Button_2>

      <FieldForColumns 

        // Modal
        showModal={showModal}
         />

      </div>
  )
}

export default App
