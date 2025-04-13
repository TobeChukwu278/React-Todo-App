import React, { useState } from 'react';

function AddTaskModal({ onAddTask, onClose }) {
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim()) {
            onAddTask(newTask);
            setNewTask('');
        }
    };

    return (
        <div style={modalOverlayStyle}>
            <div style={modalStyle}>
                <h3>Add New Task</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={handleInputChange}
                        placeholder="Enter task"
                        style={inputStyle}
                    />
                    <div style={buttonContainerStyle}>
                        <button type="submit" style={addButton}>Add</button>
                        <button type="button" onClick={onClose} style={cancelButton}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it's on top
};

const modalStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '400px',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
};

const addButton = {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
};

const cancelButton = {
    backgroundColor: '#bdc3c7',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
};

export default AddTaskModal;