import React, { useState } from 'react';
import TaskList from './Components/tasklist';
import { DragDropContext } from 'react-beautiful-dnd';
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: '1', name: 'Task 1' },
    { id: '2', name: 'Task 2' },
    { id: '3', name: 'Task 3' },
  ]);

  const onDragEnd = (result) => {
   const { destination, source, draggableId } = result;

  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  const newTasks = Array.from(tasks);
  const [reorderedTask] = newTasks.splice(source.index, 1);
  newTasks.splice(destination.index, 0, reorderedTask);

  setTasks(newTasks);
 };

  return (
    <div className="App">
      <h1>Task App</h1>
      <DragDropContext onDragEnd={onDragEnd}>  
            <TaskList tasks={tasks} />
      </DragDropContext>
    </div>
  );
}

export default App;
