import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
    console.log("Task ID: ", task.id);
    console.log("Index: ", index);
  return (
  <Draggable draggableId={task.id} index={index}>
  {(provided) => (
        <div
        className="task"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
            {task.name}
        </div>
    )}
    </Draggable>
  )
};

export default Task;
