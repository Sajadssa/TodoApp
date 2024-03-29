import Todo from "./Todo";

const ToDoList = ({ todos,onComplete }) => {
    const renderTodos = () => {

        if (todos.length === 0) return <p>add some todos...</p>;

        return (
     
            todos.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} onComplete={()=>onComplete(todo.id)}   />
                   
                );
                
            })
        );
    }
    return <div>{renderTodos()}</div>;
        
        };
 
export default ToDoList;