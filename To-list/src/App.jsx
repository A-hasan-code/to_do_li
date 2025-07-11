import { Container, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ThemeToggle from './components/ThemeToggle';
import { loadTasks, saveTasks } from './utils';

const App = () => {
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState('all');
  const [editTask, setEditTask] = useState(null);

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>ToDo App</Typography>
      <ThemeToggle />
      <TaskForm onSave={handleAddOrUpdateTask} taskToEdit={editTask} clearEdit={clearEdit} />
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={(e, newVal) => newVal && setFilter(newVal)}
        fullWidth
        sx={{ mb: 2 }}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
        <ToggleButton value="pending">Pending</ToggleButton>
      </ToggleButtonGroup>
      <TaskList tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} setTasks={setTasks} />
    </Container>
  );
};

export default App;
