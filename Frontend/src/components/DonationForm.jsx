import { useState } from 'react';
import axios from 'axios';

function DonationForm() {
  const [donorName, setDonorName] = useState();
  const [amount, setAmount] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const [cause, setCause] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/donate', { donorName, amount, paymentMethod, cause });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Make a Donation</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Donor Name:</label>
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Amount ($):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Payment Method:</label>
          <select 
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            style={styles.select}
          >
            <option value="">Select Payment Method</option>
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Select Cause:</label>
          <select
            value={cause}
            onChange={(e) => setCause(e.target.value)}
            required
            style={styles.select}
          >
            <option value="">Select Organization</option>
            <option value="education">Education</option>
            <option value="healthcare">Healthcare</option>
            <option value="environment">Environment</option>
            <option value="animals">Animal Welfare</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>Donate Now</button>
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
  'button:hover': {
    backgroundColor: '#2980b9'
  }
};

export default DonationForm;