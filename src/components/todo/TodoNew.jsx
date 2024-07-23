import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("");
    const { addNewToDo } = props;

    const handleClick = () => {
        addNewToDo(valueInput);
        setValueInput("");
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }

    return (
        <>
            <div className='todo-new'>
                <input type="text"
                    onChange={() => { handleOnChange(event.target.value) }}
                    value={valueInput}
                />
                <button
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                >Add</button>
            </div>
        </>
    )
}

export default TodoNew;