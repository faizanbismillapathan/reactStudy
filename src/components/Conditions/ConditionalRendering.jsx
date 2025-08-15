function ConditionRenderting() {
    let food = ['Dal', 'Salad', 'Vegitables', 'Roti', 'Milk'];
    // let food = [];
    if (food.length === 0) {
        return <h2> I am still hungry </h2>;
    }

    return <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="my-2">
                        <h1 className="text-center">Conditional Rendering</h1>
                        <ol className="list-group">
                            <li className="list-group-item">Displaying content based on certail conditions.</li>
                            <li className="list-group-item">Allows for dynamic user interfaces.</li>
                        </ol>
                    </div>
                    <div className="my-2">
                        <h2 className="text-center">Methods</h2>
                        <ol className="list-group">
                            <li className="list-group-item"><strong>If-Else Statements : </strong> Choose between two blocks of cotent. </li>
                            <li className="list-group-item">
                                <strong>Ternary Operator : </strong> Quick way to choose between two option
                            </li>
                            <li className="list-group-item">
                                <strong>Logical Operator : </strong>Useful for rendering content when a condition true
                            </li>
                        </ol>
                    </div>
                    <div className="my-2">
                        <h3 className="text-center">Benifits</h3>
                        <ol className="list-group">
                            <li className="list-group-item">Enhance User <strong>Experience</strong></li>
                            <li className="list-group-item"><strong>Reduces</strong> Unnecessary rendering</li>
                            <li className="list-group-item">Maked app more <strong>Interactive</strong> and <strong>Responsive</strong></li>
                        </ol>
                    </div>
                    <div className="my-2">
                        <h3 className="text-center">Example</h3>
                        {/* Ternary Operator */}
                        {/* {food.length === 0 ? <h2> I am still hungry </h2> : null} */}
                        {/* Logical Operator */}
                        {food.length === 0 && <h2> I am still hungry </h2>}
                        <ul className="list-group">
                            {food.map((item) => <li className="list-group-item" key={item}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default ConditionRenderting;