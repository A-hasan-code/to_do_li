import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <ListItem secondaryAction={
      <>
        <IconButton edge="end" onClick={() => onEdit(task)}><Edit /></IconButton>
        <IconButton edge="end" onClick={() => onDelete(task.id)}><Delete /></IconButton>
      </>
    }>
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
      <ListItemText
        primary={task.title}
        secondary={task.description}
        sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
};

export default TaskItem;