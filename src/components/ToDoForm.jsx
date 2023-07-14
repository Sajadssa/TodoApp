import { useState } from "react";

const TodoForm = (props) => {
    const [todo, setTodo] = useState("");

    const changeHandler = (e) => {
        console.log(e.target.value);
        setTodo(e.target.value);
        // همان چیزی است که کاربر می نویسد
    }
    const submitHandler = (e) => {
        //for prevent refresh form
        e.preventDefault();
        //add entered todo to todos...
    }

    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" value={todo} onChange={changeHandler} />
            <button type="submit">Add</button>
        </form>
     );
}
 
export default TodoForm;