// src/pages/Counter/Counter.jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Interactive Counter</h2>
      <h1 style={{ fontSize: '48px', margin: '20px 0' }}>{count}</h1>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px', cursor: 'pointer' }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
}
