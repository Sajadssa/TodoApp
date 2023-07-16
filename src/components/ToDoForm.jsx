import { useState } from "react";
//use of props for move data between componnets
//props  بین کامپوننت ها استفاده می شود یک روش برای انتقال دیتا که شامل هرآبجکتی یا هر چیزی می تواند باشد

const TodoForm = (props) => {
    //نیاز به یک state برای وارد کردن اطلاعات کاربر
    const [input, setInput] = useState("");

    const changeHandler = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
        // همان چیزی است که کاربر می نویسد
    }
    // وقتی روی دکمه add کلیک می شود
    const submitHandler = (e) => {
        //for prevent refresh form
        e.preventDefault();
        //add entered todo to todos...
        if (!input) {
            alert('fill in the blanks');
            //stop execution code after return keyword
            return;
        }
        //در اینجا ما برای اینکه ورودی کاربرکه در کامپوننت بچه به نام TodoForm رو به کامپوننت پدر که ToDoApp است پاس(انتقال  دهیم از  props برای انتقال این دیتا استفاده می کنیم)
        // از طریق props ما پراپرتی addtohandlers را به کامپوننت ToDoForm اضافه می کنیم
        props.addToHandlers(input);
        setInput("");
    }

    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" value={input} onChange={changeHandler} />
            <button type="submit">Add</button>
        </form>
     );
}
 
export default TodoForm;