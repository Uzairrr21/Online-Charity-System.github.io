import { useState } from 'react';
import axios from 'axios';

function FundTracker() {
  const [campaign, setCampaign] = useState();
  const [raised, setRaised] = useState();
  const [goal, setGoal] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/track-funds', { campaign, raised, goal });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Fund Tracking</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Campaign ID: </label>
          <input
            type="text"
            name="campaignId"
            onChange={(e) => setCampaign(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Total Raised ($): </label>
          <input
            type="number"
            name="totalRaised"
            onChange={(e) => setRaised(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Goal Amount ($): </label>
          <input
            type="number"
            name="goalAmount"
            onChange={(e) => setGoal(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        
        <button type="submit" style={styles.button}>Save Tracking</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '1.5rem',
    fontSize: '1.8rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontSize: '0.9rem',
    color: '#34495e',
    fontWeight: '500'
  },
  input: {
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease'
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.8rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '1rem'
  },
  'input:focus': {
    outline: 'none',
    borderColor: '#3498db'
  },
  'button:hover': {
    backgroundColor: '#2980b9'
  }
};

export default FundTracker;