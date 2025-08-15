function Map() {
    let code = "{items.map(item=> <li key={item.id}>{item.name}</li>)}";
    let code1 = "<div key={item.key}>{item.name}</div>";

    let food = ['Dal', 'Salad', 'Vegitables', 'Roti', 'Milk'];
    let users = [
        {
            id: 1,
            name: "Salman Khan",
            country: "India"
        },
        {
            id: 2,
            name: "Imran Hashmi",
            country: "Urjentina"
        },
        {
            id: 3,
            name: "Shahrukh Khan",
            country: "Nepal"
        },
        {
            id: 4,
            name: "Rajnikant",
            country: "US"
        },
        {
            id: 5,
            name: "Aamir Khan",
            country: "India"
        },
    ]
    return <>
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-8">
                    <p><strong>Pupose : </strong> Render List from Array</p>
                    <p><strong> JSX Elements : </strong> Transform array items into JSX</p>
                    <p><strong> Inline Redering : </strong> Directly inside JSX <strong><code>{code}</code></strong></p>
                    <p><strong> Key Prop : </strong> Assign unique key for optimized re-renders <strong><code>{code1}</code></strong></p>

                    <ul className="list-group">
                        {food.map((item) => <li className="list-group-item" key={item}>{item}</li>)}
                        {/* <li className="list-group-item" {food.map}>Dal</l   i> */}
                    </ul>
                    <table className="table table-striped">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Country</th>
                        </tr>
                        {users.map((item) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.country}</td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
        </div>
    </>
}
export default Map;