import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodaySection({ todos, onAddTodo, onToggleTodo }) {
    const [newTodoText, setNewTodoText] = useState('');

    const handleInputChange = (event) => {
        setNewTodoText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodoText.trim()) {
            onAddTodo(newTodoText);
            setNewTodoText('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodoText}
                    onChange={handleInputChange}
                    placeholder="Add new task"
                />
                <button type="submit">Add</button>
            </form>
            <div style={todoListContainerStyle}>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onToggle={onToggleTodo} />
                ))}
            </div>
        </div>
    );
}

const todoListContainerStyle = {
    maxHeight: '300px', // Adjust this value as needed
    overflowY: 'auto', // Enable vertical scrolling
    marginTop: '10px', // Add some spacing
};

export default TodaySection;