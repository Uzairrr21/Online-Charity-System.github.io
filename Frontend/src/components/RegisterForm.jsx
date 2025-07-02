import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/register', {
      name,
      email,
      password,
      role
    }).then(response => {
      console.log("Registration successful:", response.data);
    }).catch(error => {
      console.error("Error registering:", error);
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Role</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="role"
                value="donor"
                checked={role === 'donor'}
                onChange={(e) => setRole(e.target.value)}
                style={styles.radioInput}
                required
              />
              Donor
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="role"
                value="organization"
                checked={role === 'organization'}
                onChange={(e) => setRole(e.target.value)}
                style={styles.radioInput}
              />
              Organization
            </label>
          </div>
        </div>

        <button type="submit" style={styles.button}>Register</button>
      </form>

      <p style={styles.loginText}>
        Already have an account? <Link to="/login" style={styles.loginLink}>Login</Link>
      </p>
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
  radioGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem'
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    fontSize: '0.9rem'
  },
  radioInput: {
    cursor: 'pointer'
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
  loginText: {
    textAlign: 'center',
    marginTop: '1.5rem',
    color: '#7f8c8d'
  },
  loginLink: {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: '500',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  'input:focus': {
    outline: 'none',
    borderColor: '#3498db'
  },
  'button:hover': {
    backgroundColor: '#2980b9'
  }
};

export default RegisterForm;