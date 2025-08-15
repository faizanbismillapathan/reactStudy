export function TodoForm() {
    return <div className="row mt-3">
        <div className="col-md-7">
            <input type="text" name="todo" id="todo" className="form-control" placeholder="Enter To Do Here" />
        </div>
        <div className="col-md-3">
            <input type="date" name="date" id="date" className="form-control" />
        </div>
        <div className="col-md-2">
            <button className="btn btn-success">Add</button>
        </div>
    </div>
}