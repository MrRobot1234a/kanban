// CSS
import './card.css'

export default function Card({type, activity, link, dragOverHandler, dragLeaveHandler, dragStartHandler, dragEndHandler, dropHandler, showModal, colorCard}) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return (
        <div 
            style={{backgroundColor: `${colorCard}`}}
            draggable={true} 
            className='card_2'
            onDragOver={dragOverHandler}
            onDragLeave={dragLeaveHandler}
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
            onDrop={dropHandler} >
                <button type="button" className="btn-close close-for-card" onClick={showModal} aria-label="Закрыть"></button>
                <h3>{capitalizeFirstLetter(type)}</h3>
                <p>{activity}</p>
                {link && <a target='blank' href={link}>Follow the link</a>}
                {link && null}
        </div>
    )
}
