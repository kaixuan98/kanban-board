import React from 'react'
import Card from './Card';
import '../style.scss'

const CardList = ({status, tasks, isDragging, handleDragging, handleUpdateList }) => {
  
  const handleDrop = (e) => {
    e.preventDefault()
    handleUpdateList(+e.dataTransfer.getData("text"), status)
    handleDragging(false)
  }

  const handleDragOver = (e) => e.preventDefault()


  return (
    <div 
      className={`card-list__wrapper ${isDragging ? 'card-list__wrapper--dragging' : ''}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      >
      <h3>{status}</h3>
      <hr/>
      <div className={`cardList__container`}>
          {
            tasks.map( task => (
              status === task.status && 
              <Card 
                key={task.id}
                task={task}
                handleDragging={handleDragging}
              />
            ))
          }
      </div>
    </div>
  )
}

export default CardList