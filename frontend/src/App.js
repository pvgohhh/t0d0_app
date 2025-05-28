import React, { useState, useEffect } from 'react';
   import axios from 'axios';
   import './App.css';

   function App() {
     const [tasks, setTasks] = useState([]);
     const [newTask, setNewTask] = useState('');

     useEffect(() => {
       axios.get('http://localhost:3007/api/tasks')
         .then(response => setTasks(response.data))
         .catch(error => console.error('Error fetching tasks:', error));
     }, []);

     const addTask = () => {
       axios.post('http://localhost:3007/api/tasks', { title: newTask })
         .then(response => {
           setTasks([...tasks, response.data]);
           setNewTask('');
         })
         .catch(error => console.error('Error adding task:', error));
     };

     return (
       <div className="App">
         <h1>To-Do List</h1>
         <input
           type="text"
           value={newTask}
           onChange={(e) => setNewTask(e.target.value)}
           placeholder="Enter a new task"
         />
         <button onClick={addTask}>Add Task</button>
         <ul>
           {tasks.map(task => (
             <li key={task.id}>{task.title}</li>
           ))}
         </ul>
       </div>
     );
   }

   export default App;
