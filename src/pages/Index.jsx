import React, { useState } from 'react';
import { Box, Heading, Input, Button, VStack, HStack, Checkbox, Text } from '@chakra-ui/react';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading mb={4}>Todo App</Heading>
      <HStack mb={4}>
        <Input 
          placeholder="Add a new task" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <Button onClick={addTask}>Add</Button>
      </HStack>
      <VStack spacing={4} align="stretch">
        {tasks.map((task, index) => (
          <HStack key={index} spacing={4}>
            <Checkbox 
              isChecked={task.completed} 
              onChange={() => toggleTaskCompletion(index)}
            />
            <Text as={task.completed ? 's' : ''}>{task.text}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;