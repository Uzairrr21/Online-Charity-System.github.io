import { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('3');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/feedback', { 
      name, 
      rating, 
      comment 
    })
    .then(() => alert('Submitted!'))
    .catch(() => alert('Error submitting'));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Leave Feedback</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Your Name:</label>
          <input
            type="text"
            name="donorName"
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Rating (1-5):</label>
          <select
            name="rating"
            onChange={(e) => setRating(e.target.value)}
            style={styles.select}
            value={rating}
          >
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Comments:</label>
          <textarea
            name="comments"
            onChange={(e) => setComment(e.target.value)}
            required
            style={{...styles.input, ...styles.textarea}}
          />
        </div>

        <button type="submit" style={styles.button}>Submit Feedback</button>
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
  select: {
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    backgroundColor: 'white',
    cursor: 'pointer',
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
    transition: 'background-color 0.3s ease',
    marginTop: '1rem'
  },
  'input:focus': {
    outline: 'none',
    borderColor: '#3498db'
  },
  'select:focus': {
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

export default FeedbackForm;