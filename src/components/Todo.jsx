import AppName from './AppName'
import { TodoForm } from './TodoForm';
import Output from './Output';

function Todo() {
    return <div className="container mt-5">
        <AppName />
        <TodoForm />
        <Output />
    </div>;
}

// const Todo = () => {
//     return <div>My ToDo Component</div>;
// };

export default Todo;