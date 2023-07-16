import { useState } from "react";
import TodoForm from "./ToDoForm";
import TodoList from "./ToDoList";

 
//IN COMPONENT TODOAPP CONSIST OF 2 CHILD COMPONENT 1.TODOFORM 2.TODOS
const TodoApp = () => {
    //state global called name:todos
    const [todos, setTodos] = useState([]);
  
    const addToHandlers = (todo) => {
        console.log(todo);
    }

    return (<div className="container">todos
        {/* هنگام رندر کردن کامپوننت بچه بایستی پارامتری را که برایش تعریف کردیم رو در اینجا بش پاس بدیم */}
        <TodoForm addToHandlers={addToHandlers}  /> 
        {/* IN COMPONENT TODOFORM UPDATE STATE AND IN TODOLIST MAKE MAP METHOD */}
        <TodoList/>
       

    </div>

     );
}
 
export default TodoApp;