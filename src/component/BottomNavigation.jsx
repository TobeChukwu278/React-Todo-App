import React from 'react';
import { FaHome, FaHeart } from 'react-icons/fa';
import { AiOutlinePlusCircle, AiOutlineBell } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import styles from '../App.module.css';


function BottomNavigation({ onAddButtonClick }) {
    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const bottomNavStyle = {
        backgroundColor: '#34495e',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '15px',
        order: 2,
        ...(isLargeScreen && {
            flexDirection: 'column',
            width: '20%',
            height: '100%',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            marginBottom: 0,
            paddingRight: 0,
            order: 0,
            position: 'fixed',
            transition: 'background-color 0.3s ease',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
            },
        }),
    };

    return (
        <nav style={bottomNavStyle}>
            <button className={styles.iconButton} aria-label="Home"> {/* Use className */}
                {isLargeScreen ? 'Home' : <FaHome />}
            </button>
            <button className={styles.iconButton} aria-label="Favorites">
                {isLargeScreen ? 'Favorites' : <FaHeart />}
            </button>
            <button style={addButtonButtonStyle} onClick={onAddButtonClick} aria-label="Add Task">
                {isLargeScreen ? 'Add Task' : <AiOutlinePlusCircle />}
            </button>
            <button className={styles.iconButton} aria-label="Notifications">
                {isLargeScreen ? 'Notifications' : <AiOutlineBell />}
            </button>
            <button className={styles.iconButton} aria-label="User Profile">
                {isLargeScreen ? 'Profile' : <FiUser />}
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



export default BottomNavigation;