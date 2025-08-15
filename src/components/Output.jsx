export default function Output() {
    return <div className="row mt-2">
        <div className="col">
            <table className="table table-striped">
                <tr>
                    <th width="60%">To Do Task</th>
                    <th width="25%">Date</th>
                    <th>Delete</th>
                </tr>
                <tr>
                    <td>Buy Milk</td>
                    <td>04-10-2025</td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td>Go To College</td>
                    <td>04-10-2025</td>
                    <td><button className="btn btn-danger ">Delete</button></td>
                </tr>
            </table>
        </div>
    </div>
}