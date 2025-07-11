import { Box, Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

const TaskForm = ({ onSave, taskToEdit, clearEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, flexDirection: 'column', mb: 3 }}>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button type="submit" variant="contained">{taskToEdit ? 'Update Task' : 'Add Task'}</Button>
    </Box>
  );
};

export default TaskForm;