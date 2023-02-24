import React, {useState} from 'react'
import CardList from './CardList'
import '../style.scss'
import {data} from '../assets/data'


const Kanban = () => {

  const taskType = ['Not Started', 'In Progress', 'Completed']
  const [isDragging, setIsDragging] = useState(false); 
  const [taskList, setTaskList] = useState(data) // we have initial data here

  // the handle function is passed to the children so and prop up to this component
  const handleDragging = (dragging) => setIsDragging(dragging)

  // this function will take in the id and status of the dragging item 
  const handleUpdateList = (id, status) => {
    // try to find the card in that status
    let card = taskList.find( item => item.id === id) 
    
    // if there is a card and does not have same status 
    if(card && card.status !== status){
      card.status = status
      setTaskList( prev => ([
        card, // the found card with updated status
        ...prev.filter(item => item.id !== id)
      ]))
    }
  }


  return (
    <div className="kanban__container">
      {
        taskType.map( statusType => (
          <CardList 
            key={statusType}
            status={statusType} 
            tasks={taskList} 
            isDragging={isDragging}
            handleDragging={handleDragging}
            handleUpdateList={handleUpdateList}
          ></CardList>
        ))
      }
    </div>
  )
}

export default Kanban