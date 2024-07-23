import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("STM");
    const { addNewToDo } = props;

    const handleClick = () => {
        alert(valueInput);
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }

    return (
        <>
            <div className='todo-new'>
                <input type="text"
                    onChange={() => { handleOnChange(event.target.value) }}
                />
                <button
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                >Add</button>
                <div>My Text Input is: {valueInput}</div>
            </div>
        </>
    )
}

export default TodoNew;