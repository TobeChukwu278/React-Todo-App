import React, { useState } from 'react';
import TodoItem from './TodayItem';

function TodaySection({ todos, onAddTodo, onToggleTodo }) {
    const [newTodoText, setNewTodoText] = useState('');

    const handleInputChange = (event) => {
        setNewTodoText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodoText.trim()) {
            onAddTodo(newTodoText);
            setNewTodoText(''); // Clear the input after adding
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: 'space-between' }}>
                <input
                    type="text"
                    value={newTodoText}
                    onChange={handleInputChange}
                    placeholder="Add new task"
                    style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }}
                />
                <button type="submit">Add</button>
            </form>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggleTodo} />
            ))}
        </div>
    );
}

export default TodaySection;