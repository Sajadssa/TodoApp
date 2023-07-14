
import './App.css';
import ToDoApp from './components/ToDoApp';
 
 

function App() {
  return (
    <div className='App'>
      <h1>To Do App</h1>
      <ToDoApp /> 
    {/* MASTER COMPONENT THAT DEFINE TODOAPP */}
 
    </div>
  );
}

export default App;
//make structure for app 
// /* define TodoApp=>parent component that define global state */
// TodoForm => Define form =>input+button=>UI(USER INTERFACE)
// TodoList => todos.map(...) for show each item when add todo to list(array todos)  


