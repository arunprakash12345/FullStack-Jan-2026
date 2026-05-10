// Add tasks using an input field and button.
// Remove a task when clicking a delete button next to the task.

import { useState } from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input]);
            setInput("");
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i != index);
        setTasks(newTasks);
    };

    console.log({input, tasks});

    return (
        <div style={{
            maxWidth: "400px",
            margin: "auto",
            textAlign: "center"
        }}>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Enter Task"
                style={{ marginRight: "10px", padding: "10px" }}
            />
            <button disabled={!input} onClick={addTask}>Add Task</button>

            {tasks.length === 0 ? <div style={{ marginTop: "230px" }}>No tasks added yet.</div> : (
                <ul>
                    {tasks.map((task, index) => (
                        <li key={`${task}_${index}`}>
                            {task}
                            <button
                                style={{ marginLeft: "8px" }}
                                onClick={() => deleteTask(index)}
                            >❌</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Todo;