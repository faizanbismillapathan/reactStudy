import AppName from './AppName'
import { TodoForm } from './TodoForm';
import Output from './Output';

function Todo() {
    let todo = [
        {
            task: "Buy Milk",
            date: "04-10-2025"
        },
        {
            task: "Do Homework",
            date: "04-10-2025"
        },
        {
            task: "Go to School",
            date: "04-10-2025"
        },
        {
            task: "Learn the topic",
            date: "04-10-2025"
        },
    ]
    return <div className="container mt-5">
        <AppName />
        <TodoForm />
        <Output tasks={todo} />
    </div>;
}

// const Todo = () => {
//     return <div>My ToDo Component</div>;
// };

export default Todo;