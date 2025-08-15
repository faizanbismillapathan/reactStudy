import TodoItem from "./TodoItem"

export default function Output({ tasks }) {
    return <div className="row mt-2">
        <div className="col">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th width="60%">To Do Task</th>
                        <th width="25%">Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <TodoItem tasks={tasks}></TodoItem>
            </table>
        </div>
    </div>
}