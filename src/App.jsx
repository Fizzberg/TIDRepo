import {useState}  from 'react';


function App() {
  const [tasks, setTasks] = useState([
    'Learn React',
    'Build a To-do list',
    'Commit My work,' 
  ]);

  const [newTask, setNewTask] = useState('');
  
  function addTask() {
    setTasks([...tasks, newTask]);
    setNewTask('');
  }


  return (
    <div>
        <p> my To-do list</p>

     
      <input
       
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Add a new task"

      />
       <button onClick={addTask}> Add Task</button>


      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
  

}
export default App;