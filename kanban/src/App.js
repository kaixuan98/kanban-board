import './style.scss';
import Kanban from './components/Kanban'; 

function App() {
  return (
    <div className="App">
      <div className="app__wrapper">
        <h1 className="app__title">Kanban Board</h1>
        <Kanban /> 
      </div>
    </div>
  );
}

export default App;
