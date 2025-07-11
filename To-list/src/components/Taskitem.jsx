// src/components/TaskItem.jsx
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Box,
  Chip,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <ListItem
      sx={{
        mb: 1,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        px: 2,
        py: 1,
        boxShadow: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <DragIndicatorIcon sx={{ color: 'grey.500', cursor: 'grab' }} />
        <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
      </Box>

      <ListItemText
        primary={
          <Typography variant="subtitle1" sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </Typography>
        }
        secondary={
          task.description && (
            <Typography variant="body2" color="text.secondary">
              {task.description}
            </Typography>
          )
        }
        sx={{ flex: 1, mx: 2 }}
      />
  <ListItemSecondaryAction sx={{ display: 'flex', gap: 1 }}>
     <Chip
        label={task.completed ? 'Completed' : 'Pending'}
        size="small"
        color={task.completed ? 'success' : 'warning'}
        sx={{ mr: 2 }}
      />
        <IconButton edge="end" onClick={() => onEdit(task)} color="primary">
          <EditIcon />
        </IconButton>
        <IconButton edge="end" onClick={() => onDelete(task.id)} color="error">
          <DeleteIcon />
        </IconButton>
          

      </ListItemSecondaryAction>
   
    
    </ListItem>
  );
};

export default TaskItem;
