import { useState } from "react";
import TodoForm from "./ToDoForm";
import TodoList from "./ToDoList";

 
//IN COMPONENT TODOAPP CONSIST OF 2 CHILD COMPONENT 1.TODOFORM 2.TODOS
const TodoApp = () => {
    //state global called name:todos
    const [todos, setTodos] = useState([]);
  
    const addToHandlers = (input) => {
        // console.log(todo);
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
        
            text: input,
            iscompleted: false,
        };
        
            
    
   /*  todos اضافه کردن به */
    setTodos([...todos, newTodo]);
    }
    // نوشتن هندلر برای onComplete  این پراپس به کامپوننت todolist داده میشه چون این کامپوننت  استیت کامپوننت پدر را تغییر می دهد یعنی todos ها رو تغییر می دهد
    const onCompleteHandler = (id) => {
        console.log(id);
    }

    return (<div className="container">todos
        {/* هنگام رندر کردن کامپوننت بچه بایستی پارامتری را که برایش تعریف کردیم رو در اینجا بش پاس بدیم */}
        <TodoForm addToHandlers={addToHandlers}  /> 
        {/* IN COMPONENT TODOFORM UPDATE STATE AND IN TODOLIST MAKE MAP METHOD */}
        <TodoList todos={todos} onComplete={onCompleteHandler} />
       

    </div>

     );
}
 
export default TodoApp;