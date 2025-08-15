export default function PassingChildren() {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h3>Passing Children</h3>
                    <ol>
                        <li><strong>Children</strong> is a <strong>special prop</strong> for passing <strong>element into components.</strong></li>
                        <li><strong>Used for flexible</strong> and <strong>reusable</strong> component designs.</li>
                        <li><strong>Common</strong> in layout or <strong>container components.</strong></li>
                        <li><strong>Access</strong> with <strong>props.children</strong></li>
                        <li><strong>Can be any content:</strong> string, number, <strong>JSX</strong> or components.</li>
                        <li><strong>Enhances</strong> component <strong>compatibility</strong> and <strong>reuseability</strong>.</li>
                    </ol>
                </div>
            </div>
        </div>
    </>
}