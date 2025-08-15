import Child from "./child";

const Parent = (data) => {
    let { users } = data;
    return <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Industry</th>
                </tr>
            </thead>
            {/* <Child users={props.users}></Child> */}
            <Child users={users}></Child>
        </table>
    </>
}

export default Parent;