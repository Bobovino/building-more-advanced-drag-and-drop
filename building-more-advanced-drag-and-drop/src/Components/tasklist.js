import React from 'react';
import Task from './task.js';
import { Droppable } from 'react-beautiful-dnd';

const TaskList = ({ tasks }) => {
  return (
    <Droppable droppableId="taskList">
      {(provided) => (
        <div className="taskList" ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
