import React, { useState } from 'react';
import TaskList from './Components/tasklist';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./App.css";

function App() {
  const [tasks, setTasks] = useState({
    "todo": [
      { id: '1', content: 'Task 1' },
      { id: '2', content: 'Task 2' }
    ],
    "inProgress": [
      { id: '3', content: 'Task 3' },
    ],
    "done": [
      { id: '4', content: 'Task 4' },
    ]
  });

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    // Create a copy of the item before removing it from state
    const itemCopy = { ...tasks[source.droppableId][source.index] };

    // Remove the item from the source list and insert it into the destination
    setTasks(prev => {
      prev = { ...prev };
      prev[source.droppableId].splice(source.index, 1);
      prev[destination.droppableId].splice(destination.index, 0, itemCopy);

      return prev;
    });
  };
  return (
    <div className="App">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {Object.entries(tasks).map(([column, tasks]) => (
          <div key={column}>
            <h2>{column}</h2>
            <Droppable droppableId={column}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks.map(({ id, content }, index) => (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;