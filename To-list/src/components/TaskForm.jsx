// src/components/TaskForm.jsx
import { Box, Button, TextField, Paper } from '@mui/material';
import { useState, useEffect } from 'react';

const TaskForm = ({ onSave, taskToEdit, clearEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ title, description });
    setTitle('');
    setDescription('');
    clearEdit();
  };

  return (
    <Paper
      elevation={1}
      sx={{ mb: 3, p: 2, borderRadius: 2, backgroundColor: 'background.default' }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <TextField
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          label="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={2}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </Button>
      </Box>
    </Paper>
  );
};

export default TaskForm;
