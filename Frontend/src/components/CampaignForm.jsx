import { useState } from 'react';
import axios from 'axios';

function CampaignForm() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [goal, setGoal] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/create-campaign', { title, description, goal });
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Campaign</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Campaign Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{...styles.input, ...styles.textarea}}
          />
        </div>

        <div style={styles.formGroup}>
          <input
            type="number"
            placeholder="Goal Amount ($)"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            min="1"
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Create</button>
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
    flexDirection: 'column'
  },
  input: {
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease'
  },
  textarea: {
    minHeight: '120px',
    resize: 'vertical'
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.8rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  'input:focus': {
    outline: 'none',
    borderColor: '#3498db'
  },
  'textarea:focus': {
    outline: 'none',
    borderColor: '#3498db'
  },
  'button:hover': {
    backgroundColor: '#2980b9'
  }
};

export default CampaignForm;