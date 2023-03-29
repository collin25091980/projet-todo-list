import React, { useState } from 'react';
import classes from './App.module.css';


import Task from '../../Components/Task/Task';

function App() {
    // State 
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    // Functions
    const removeClickHandler = index => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    }

    const doneClickHandler = index => {
      const newTasks = [...tasks];
      newTasks[index].done = !newTasks[index].done;
      setTasks(newTasks);
    }

    const changedFormHanlder = e => {
      setInput(e.target.value);
    }

    const submitFormHandler = e => {
      e.preventDefault();
      const newTask = {
        content: input,
        done: false
      }
      setTasks([...tasks,newTask]);
      setInput('');
    }



    // Variables
    let displayedTasks = tasks.map((task, index) => (
      <Task
        content={task.content}
        done={task.done}
        key={index}
        removedClick={() => removeClickHandler(index)}
        donedClick={() => doneClickHandler(index)}
      />
    ));



  return (
    <div className={classes.App}>
      <header>
        <span>TO-DO</span>
      </header>

      <div className={classes.add}>
        <form onSubmit={(e) => submitFormHandler(e)}>
          <input 
            type="text" 
            placeholder="Que souhaitez-vous ajouter ?" 
            value={input}
            onChange={(e) => changedFormHanlder(e)}
          />
          <button type="submit">
            Ajouter
          </button>
        </form>
      </div>
      {displayedTasks}
    </div>
  );
}

export default App;
