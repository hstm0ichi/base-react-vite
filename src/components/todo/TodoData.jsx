const TodoData = (props) => {
    const { name, age, data, todoList } = props;

    return (
        <>
            <div className='todo-data'>
                <div>
                    {JSON.stringify(todoList)}
                </div>
            </div>
        </>
    )
}

export default TodoData;