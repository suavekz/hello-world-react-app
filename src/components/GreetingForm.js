import React, { useState } from 'react';

function GreetingForm() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const displayGreeting = () => {
    return name.trim() ? `Hello, ${name.trim()}!` : 'Hello, World!';
  };

  return (
    <div style={styles.container}>
      <div style={styles.greetingSection}>
        <h1 style={styles.greeting}>{displayGreeting()}</h1>
      </div>
      <div style={styles.inputSection}>
        <label htmlFor="nameInput" style={styles.label}>
          Enter your name:
        </label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Your name here..."
          style={styles.input}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif'
  },
  greetingSection: {
    marginBottom: '2rem'
  },
  greeting: {
    fontSize: '2.5rem',
    color: '#333',
    textAlign: 'center',
    margin: '0'
  },
  inputSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem'
  },
  label: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '0.5rem'
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    width: '300px',
    textAlign: 'center',
    transition: 'border-color 0.3s ease',
    outline: 'none'
  }
};

export default GreetingForm;