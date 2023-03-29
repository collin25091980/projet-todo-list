import React, { useState } from 'react';
import classes from './App.module.css';


import Task from '../../Components/Task/Task';

function App() {
    // State 
    const [tasks, setTasks] = useState([
        {content: "Aller chercher les courses", done: false},
        {content: "Aller chercher les courses", done: false},
        {content: "Aller chercher les courses", done: false},
        {content: "Aller chercher les courses", done: true}
      ]
    );

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
        <form>
          <input type="text" placeholder="Que souhaitez-vous ajouter ?" />
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
