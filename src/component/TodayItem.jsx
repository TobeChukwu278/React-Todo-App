import React from 'react';

function TodoItem({ todo, onToggle }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', backgroundColor: '#34495e', padding: '10px', borderRadius: '5px' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginLeft: '10px' }}>
                {todo.text}
            </span>
        </div>
    );
}

export default TodoItem;