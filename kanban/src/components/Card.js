import React from 'react'
import '../style.scss'

const Card = ({task, handleDragging}) => {

  let cardColor = "card__container--todo";

  if(task.status === 'In Progress'){
    cardColor = "card__container--inprogress";
  }else if(task.status === 'Completed'){
    cardColor = "card__container--completed";
  }

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", `${task.id}`)
    handleDragging(true)
}

  const handleDragEnd = () => handleDragging(false)


  return (
    <div 
      className={`card__container ${cardColor}`}
      draggable
      onDragEnd = {handleDragEnd}
      onDragStart = {handleDragStart}
    >
      <p className="card__title">{task.title}</p>
    </div>
  )
}

export default Card