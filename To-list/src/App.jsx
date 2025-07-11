// src/App.jsx
import {
  Container,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Paper,
  TextField,
  InputAdornment,
  Divider
} from '@mui/material';
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ThemeToggle from './components/ThemeToggle';
import { loadTasks, saveTasks } from './utils';
import SearchIcon from '@mui/icons-material/Search';

const App = () => {
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState('all');
  const [editTask, setEditTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const handleAddOrUpdateTask = ({ title, description }) => {
    if (editTask) {
      setTasks((prev) => prev.map((t) => (t.id === editTask.id ? { ...t, title, description } : t)));
    } else {
      const newTask = { id: Date.now(), title, description, completed: false, createdAt: new Date().toISOString() };
      setTasks((prev) => [newTask, ...prev]);
    }
  };

  const handleToggle = (id) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  const handleDelete = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));
  const handleEdit = (task) => setEditTask(task);
  const clearEdit = () => setEditTask(null);

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'completed') return task.completed;
      if (filter === 'pending') return !task.completed;
      return true;
    })
    .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Container maxWidth="md" sx={{ mt: 4, pb: 5 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" fontWeight={600}>ToDo App</Typography>
          <ThemeToggle />
        </Box>

        <TaskForm onSave={handleAddOrUpdateTask} taskToEdit={editTask} clearEdit={clearEdit} />

        <TextField
          fullWidth
          placeholder="Search tasks..."
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(e, newVal) => newVal && setFilter(newVal)}
          fullWidth
          sx={{ mb: 3 }}
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="completed">Completed</ToggleButton>
          <ToggleButton value="pending">Pending</ToggleButton>
        </ToggleButtonGroup>

        <Divider sx={{ mb: 2 }} />

        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
          setTasks={setTasks}
        />
      </Paper>
    </Container>
  );
};

export default App;
