import React, { useState, useEffect } from 'react';
   import axios from 'axios';
   import './App.css';

   function App() {
     const [tasks, setTasks] = useState([]);
     const [newTask, setNewTask] = useState('');

     useEffect(() => {
       axios.get('http://backend:3001/api/tasks')
         .then(response => setTasks(response.data))
         .catch(error => console.error('Error fetching tasks:', error));
     }, []);

     const addTask = () => {
       if (newTask.trim()) {
         axios.post('http://backend:3001/api/tasks', { title: newTask.trim() })
           .then(response => {
             setTasks([...tasks, response.data]);
             setNewTask('');
           })
           .catch(error => console.error('Error adding task:', error));
       }
     };

     return (
       <div className="app-container">
         <h1 className="app-title">To-Do List</h1>
         <div className="input-container">
           <input
             type="text"
             value={newTask}
             onChange={(e) => setNewTask(e.target.value)}
             placeholder="Enter a new task"
             className="task-input"
           />
           <button onClick={addTask} className="add-button">Add Task</button>
         </div>
         <ul className="task-list">
           {tasks.length === 0 ? (
             <li className="no-tasks">No tasks yet!</li>
           ) : (
             tasks.map(task => (
               <li key={task.id} className="task-item">{task.title}</li>
             ))
           )}
         </ul>
       </div>
     );
   }

   export default App;
