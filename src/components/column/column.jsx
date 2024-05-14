// Components
// import Card from '../card/card'

// CSS
import './column.css'

export default function Column({title, dragOverHandler, dropCardHandler, children}) {
    return (
        <div 
            className="col-3 item"
            onDragOver={dragOverHandler}
            onDrop={dropCardHandler} >
                <h2>{title}</h2>
                {children}
        </div>
    )
}
