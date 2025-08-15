function Child({ users }) {
    return <>
        <tbody>
            {users.map((item) =>
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                    <td>{item.industry}</td>
                </tr>
            )}

        </tbody>
    </>
}

export default Child;