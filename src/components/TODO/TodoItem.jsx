const TodoItem = ({ tasks }) => {
    return <>
        <tbody>
            {tasks.map((item) =>
                <tr key={item.task}>
                    <td>{item.task}</td>
                    <td>{item.date}</td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
            )}
        </tbody>
    </>
}

export default TodoItem;