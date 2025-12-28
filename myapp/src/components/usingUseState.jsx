import { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${user.name}, Email: ${user.email}`);
  };

  return (
    <div>
      <input
        placeholder="Name"
        onChange={(e) =>
          setUser({ ...user, name: e.target.value })
        }
      />
      <input
        placeholder="Email"
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
      />
        <button onClick={handleSubmit}>Submit</button>

      <p>{user.name} - {user.email}</p>
    </div>
  );
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}


export { UserForm, Todo };
