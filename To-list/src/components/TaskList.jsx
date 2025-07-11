// src/components/TaskList.jsx
import { List, Typography } from '@mui/material';
import { useRef } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete, onEdit, setTasks }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    const copyListItems = [...tasks];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTasks(copyListItems);
  };

  if (!tasks.length) {
    return <Typography align="center" color="text.secondary" sx={{ py: 4 }}>No tasks found.</Typography>;
  }

  return (
    <List sx={{ px: 0 }}>
      {tasks.map((task, index) => (
        <div
          key={task.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={handleDragEnd}
          style={{ cursor: 'grab' }}
        >
          <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
        </div>
      ))}
    </List>
  );
};

export default TaskList;
