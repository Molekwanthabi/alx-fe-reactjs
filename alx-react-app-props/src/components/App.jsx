import React from 'react';
import Counter from './components/Counter'; // Adjust path if necessary

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <h1>React Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;
