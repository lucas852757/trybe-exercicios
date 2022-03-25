import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}


function App() {
  return (
    <div className="App">
      <p>{list.map((element) =>  Task(element))}</p>
    </div>
  );
}

export default App;
