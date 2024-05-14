// React-redux components
import { useSelector, useDispatch } from 'react-redux'

//Actions
import { 
    dragOverHandler,
    dragLeaveHandler,
    dragStartHandler,
    dragEndHandler,
    dropHandler,
    dropCardHandler
} from '../../store/boardsSlice'

// Components
import Column from '../column/column'
import Card from '../card/card'

// CSS
import './field-for-columns.css'

export default function FieldForColumns({showModal}) {
    
    const boards = useSelector(state => state.boards.boards)
    const dispatch = useDispatch()

    return (
        <div className="row justify-content-between" style={{marginBottom: "20px"}}>

            {boards.map(board => (
                <Column
                    key={board.id} 
                    title={board.title}
                    
                    dragOverHandler={(e) => dispatch(dragOverHandler({ e }))}
                    dropCardHandler={(e) => dispatch(dropCardHandler({ e, board }))} >
                        {board.cards.map(card => (
                            <Card
                                colorCard={board.color}

                                key={parseInt(card.key)}
                                type={card.type}
                                activity={card.activity}
                                link={card.link}
                                
                                // Drag and drop
                                dragOverHandler={(e) => dispatch(dragOverHandler({ e }))}
                                dragLeaveHandler={(e) => dispatch(dragLeaveHandler({ e }))}
                                dragStartHandler={(e) => dispatch(dragStartHandler({ e, board, card }))}
                                dragEndHandler={(e) => dispatch(dragEndHandler({ e }))}
                                dropHandler={(e) => dispatch(dropHandler({ e }))}
                                
                                // Modal
                                showModal={(e) => showModal(e, board.id - 1, card.key)}
                                />
                        ))}
                </Column>
            ))}

        </div>
    )
}