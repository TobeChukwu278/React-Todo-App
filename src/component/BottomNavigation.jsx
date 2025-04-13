import React from 'react';
import { FaHome, FaHeart } from 'react-icons/fa';
import { AiOutlinePlusCircle, AiOutlineBell } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';

function BottomNavigation({ onAddButtonClick }) {
    return (
        <nav style={bottomNavStyle}>
            <button style={iconButtonStyle} aria-label="Home">
                <FaHome />
            </button>
            <button style={iconButtonStyle} aria-label="Favorites">
                <FaHeart />
            </button>
            <button style={addButtonButtonStyle} onClick={onAddButtonClick} aria-label="Add Task">
                <AiOutlinePlusCircle />
            </button>
            <button style={iconButtonStyle} aria-label="Notifications">
                <AiOutlineBell />
            </button>
            <button style={iconButtonStyle} aria-label="User Profile">
                <FiUser />
            </button>
        </nav>
    );
}

const iconButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '20px',
    padding: '15px', // Increased padding for better touch targets
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
};

const addButtonButtonStyle = {
    ...iconButtonStyle,
    fontSize: '30px',
};

const bottomNavStyle = {
    backgroundColor: '#34495e',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15px',
    [`@media (min-width: 768px)`]: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '20%', // Adjust width as needed (e.g., 20% or a fixed px value)
        maxWidth: '200px',
        padding: '20px',
    },
};

export default BottomNavigation;