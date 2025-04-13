import React, { useState } from 'react';
import TodaySection from './TodaySection';
import PastActivitySection from './PastActivitySection';
import BottomNavigation from './BottomNavigation';
import AddTaskModal from './AddTaskModal';
import { useMediaQuery } from 'react-responsive';

function TodoListScreen() {
    const [todos, setTodos] = useState([]);
    const [pastActivities, setPastActivities] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isLargeScreen = useMediaQuery({ minWidth: 768 });

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
        width: '97%',
        height: '100%',
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '20px',
        justifyContent: 'space-between',
        ...(isLargeScreen && {
            width: '97%',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 0,
            paddingRight: '20px',
            height: '100%',
        }),
    };

    const mainContentStyle = {
        flexGrow: 1,
        ...(isLargeScreen && {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            flex: '1 0 0', // Take up remaining space
            marginBottom: 0,
            paddingLeft: '30%',
            height: '100%',
            overflow: 'hidden',
        }),
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