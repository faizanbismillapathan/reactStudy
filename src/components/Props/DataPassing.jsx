import Parent from "./Parant";
export default function DataPassing() {
    let users = [
        // Bollywood
        { id: 1, name: "Salman Khan", country: "India", industry: "Bollywood" },
        { id: 2, name: "Imran Hashmi", country: "India", industry: "Bollywood" },
        { id: 3, name: "Shahrukh Khan", country: "India", industry: "Bollywood" },
        { id: 4, name: "Rajnikant", country: "India", industry: "Tollywood" },
        { id: 5, name: "Aamir Khan", country: "India", industry: "Bollywood" },
        { id: 6, name: "Deepika Padukone", country: "India", industry: "Bollywood" },
        { id: 7, name: "Priyanka Chopra", country: "India", industry: "Bollywood" },
        { id: 8, name: "Ranveer Singh", country: "India", industry: "Bollywood" },
        { id: 9, name: "Kareena Kapoor", country: "India", industry: "Bollywood" },
        { id: 10, name: "Hrithik Roshan", country: "India", industry: "Bollywood" },

        // Tollywood
        { id: 11, name: "Prabhas", country: "India", industry: "Tollywood" },
        { id: 12, name: "Mahesh Babu", country: "India", industry: "Tollywood" },
        { id: 13, name: "Allu Arjun", country: "India", industry: "Tollywood" },
        { id: 14, name: "Rashmika Mandanna", country: "India", industry: "Tollywood" },
        { id: 15, name: "Samantha Ruth Prabhu", country: "India", industry: "Tollywood" },

        // Hollywood
        { id: 16, name: "Leonardo DiCaprio", country: "USA", industry: "Hollywood" },
        { id: 17, name: "Tom Cruise", country: "USA", industry: "Hollywood" },
        { id: 18, name: "Scarlett Johansson", country: "USA", industry: "Hollywood" },
        { id: 19, name: "Brad Pitt", country: "USA", industry: "Hollywood" },
        { id: 20, name: "Angelina Jolie", country: "USA", industry: "Hollywood" },
        { id: 21, name: "Chris Hemsworth", country: "Australia", industry: "Hollywood" },
        { id: 22, name: "Robert Downey Jr.", country: "USA", industry: "Hollywood" },
        { id: 23, name: "Jennifer Lawrence", country: "USA", industry: "Hollywood" },
        { id: 24, name: "Emma Watson", country: "UK", industry: "Hollywood" },
        { id: 25, name: "Keanu Reeves", country: "Canada", industry: "Hollywood" },
        { id: 26, name: "Gal Gadot", country: "Israel", industry: "Hollywood" }
    ];

    let code = '<header title="My APP">';
    return <>
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <h3>Props in React</h3>
                    <ol>
                        <li>Short for <strong>Properties</strong>.</li>
                        <li>Machanism for <strong>Passing Data</strong>.</li>
                        <li><strong>Read-only</strong> By Default.</li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <h3>Usage</h3>
                    <ol>
                        <li>Passing data from <strong>Parant to child component</strong>.</li>
                        <li>Makes component <strong>reusable</strong>.</li>
                        <li>Defined as <strong>attributes</strong> in JSX.</li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <h3>Key Points</h3>
                    <ol>
                        <li>Data flows <strong>one-way</strong> (downwords).</li>
                        <li>Props are <strong>immutable</strong>.</li>
                        <li>Used for <strong>communication between components</strong>.</li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <h3>Examples</h3>
                    <strong>
                        <code>{code}</code>
                    </strong>
                </div>
            </div>
            <div className="row">
                <div className="col-10">

                    <Parent users={users} />
                </div>
            </div>
        </div>
    </>
}