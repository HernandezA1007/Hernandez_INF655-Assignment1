import React from 'react';

function TodoItem({ description, completed, onToggle }) {
    return (
        <div className="todoItem">
            <input type="checkbox" checked={completed} onChange={onToggle} />
            <span>{description}</span>
        </div>
    );
}

export default TodoItem;