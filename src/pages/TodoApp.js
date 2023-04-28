import React, { useState } from 'react';
import TodoList from '../components/TodoList';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = (event) => {
        event.preventDefault();
        if (!inputValue.trim()) return;
        setTodos([...todos, { description: inputValue, completed: false }]);
        setInputValue('');
    };

    return (
        <div className="todoApp">
            <h1>Todo App</h1>
            <TodoList todos={todos} setTodos={setTodos} />
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoApp;