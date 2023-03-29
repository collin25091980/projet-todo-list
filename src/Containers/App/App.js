import './App.css';

import Task from '../../Components/Task/Task';

function App() {
  return (
    <div className="App">
      <header>
        <span>TO-DO</span>
      </header>

      <div className="add">
        <form>
          <input type="text" placeholder="Que souhaitez-vous ajouter ?" />
          <button type="submit">
            Ajouter
          </button>
        </form>
      </div>
      <Task />
    </div>
  );
}

export default App;
