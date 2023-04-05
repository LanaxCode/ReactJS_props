import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';


const datenbank = [
  {
    toDo: "Bug Grocery"
  },
  {
    toDo: "Send Email"
  },
  {
    toDo: "Finish Assignment"
  },
  {
    toDo: "Write Blog"
  },
  {
    toDo: "Bake Cake"
  },
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todos</h1>
        <Todo
          toDo={datenbank[0].toDo}
        />
        <Todo
          toDo={datenbank[1].toDo}
        />
        <Todo
          toDo={datenbank[2].toDo}
        />
        <Todo
          toDo={datenbank[3].toDo}
        />
        <Todo
          toDo={datenbank[4].toDo}
        />
      </header>
    </div>
  );
}

export default App;
