import React from 'react';
import TodoListScreen from './component/TodoListScreen';

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TodoListScreen />
    </div>
  );
}

export default App;