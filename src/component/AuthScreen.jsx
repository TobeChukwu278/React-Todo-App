import React from 'react';

function AuthScreen({ onSignIn }) {
    return (
        <div style={{ width: 'auto', padding: '20px', backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1>TO DO</h1>
            <p>Reminds Everythings</p>
            <button onClick={onSignIn}>Sign in with Google Plus</button>
            <button onClick={onSignIn}>Sign in with Facebook</button>
            <button onClick={onSignIn}>Sign in with Email</button>
        </div>
    );
}

export default AuthScreen;