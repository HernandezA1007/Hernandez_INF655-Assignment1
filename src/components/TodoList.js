// import React, { useState } from 'react';
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
    // const [todos, setTodos] = useState([]);
    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
        <div className="todoList">
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    description={todo.description} 
                    completed={todo.completed} 
                    onToggle={() => toggleTodo(index)} 
                />
            ))}
        </div>
    );

}

export default TodoList;