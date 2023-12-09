import Todo from "./Components/Todo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="title text-center">My Todo</h1>

        <Todo />
      </div>
    </div>
  );
}

export default App;
