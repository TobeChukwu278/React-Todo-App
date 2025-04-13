import React, { useState } from 'react';
import TodaySection from './TodaySection';
import PastActivitySection from './PastActivitySection';
import BottomNavigation from './BottomNavigation';
import AddTaskModal from './AddTaskModal';

function TodoListScreen() {
    const [todos, setTodos] = useState([]);
    const [pastActivities, setPastActivities] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addTodo = (newTodoText) => {
        setTodos([...todos, { id: Date.now(), text: newTodoText, completed: false }]);
        closeModal();
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                const updatedTodo = { ...todo, completed: !todo.completed };
                if (updatedTodo.completed) {
                    setPastActivities(prevActivities => [
                        ...prevActivities,
                        {
                            id: `past-${Date.now()}`,
                            text: todo.text,
                            date: formatDate(new Date()),
                            status: 'Completed',
                        },
                    ]);
                }
                return updatedTodo;
            }
            return todo;
        }));
    };

    const formatDate = (date) => {
        const options = { month: 'short', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    const screenContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '20px',
        // paddingRight: '20%',
        justifyContent: 'space-between',
        [`@media (min-width: 768px)`]: {
            flexDirection: 'row',
            width: '100%',
            // width: '110%',
            height: '90vh',
            backgroundColor: '#2c3e50',
            color: '#fff',
            padding: '10px',
        },
    };

    const mainContentStyle = {
        flexGrow: 1,
        marginBottom: '20px',
        [`@media (min-width: 768px)`]: {
            flex: '0 0 100%',
            marginBottom: 0,
            paddingRight: '20px',
            height: '90vh',
        },
    };

    return (
        <div style={screenContainerStyle}>
            <div style={mainContentStyle}>
                <h2>To do list</h2>
                <TodaySection todos={todos} onAddTodo={addTodo} onToggleTodo={toggleTodo} />
                <h2>Past Activity</h2>
                <PastActivitySection activities={pastActivities} />
            </div>
            <BottomNavigation onAddButtonClick={openModal} />
            {isModalOpen && <AddTaskModal onAddTask={addTodo} onClose={closeModal} />}
        </div>
    );
}

export default TodoListScreen;