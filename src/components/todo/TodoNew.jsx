
const TodoNew = (props) => {
    const { addNewToDo } = props;

    const handleClick = () => {
        alert("Click me");
    }

    const handleOnChange = (name) => {

        alert("Change: " + name);
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
            </div>
        </>
    )
}

export default TodoNew;