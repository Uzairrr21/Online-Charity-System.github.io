import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import DonationForm from './components/DonationForm';
import CampaignForm from './components/CampaignForm';
import FundTracker from './components/FundTracker';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Navigation Menu */}
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
            <li style={styles.navItem}><Link to="/login" style={styles.navLink}>Login</Link></li>
            <li style={styles.navItem}><Link to="/register" style={styles.navLink}>Register</Link></li>
            <li style={styles.navItem}><Link to="/donate" style={styles.navLink}>Donate</Link></li>
            <li style={styles.navItem}><Link to="/create-campaign" style={styles.navLink}>Campaign</Link></li>
            <li style={styles.navItem}><Link to="/track-funds" style={styles.navLink}>Tracker</Link></li>
            <li style={styles.navItem}><Link to="/feedback" style={styles.navLink}>Feedback</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/donate" element={<DonationForm />} />
          <Route path="/create-campaign" element={<CampaignForm />} />
          <Route path="/track-funds" element={<FundTracker />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route
            path="/"
            element={
              <div style={styles.homeContainer}>
                <h1 style={styles.homeTitle}>Welcome to Online Charity System</h1>
                <div style={styles.quotesContainer}>
                  <p style={styles.quote}>"No one has ever become poor by giving." - Anne Frank</p>
                  <p style={styles.quote}>"The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi</p>
                  <p style={styles.quote}>"Charity begins at home, but should not end there." - Thomas Fuller</p>
                  <p style={styles.quote}>"It's not how much we give but how much love we put into giving." - Mother Teresa</p>
                  <p style={styles.quote}>"We make a living by what we get, but we make a life by what we give." - Winston Churchill</p>
                  <p style={styles.quote}>"Every charitable act is a stepping stone toward heaven." - Henry Ward Beecher</p>
                </div>
              </div>
            }
          />
        </Routes>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>© {new Date().getFullYear()} Charity Platform. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif'
  },
  nav: {
    backgroundColor: '#3498db',
    padding: '1rem'
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  navItem: {
    margin: 0
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#2980b9'
    }
  },
  homeContainer: {
    textAlign: 'center',
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    flex: 1
  },
  homeTitle: {
    color: '#2c3e50',
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  quotesContainer: {
    color: '#34495e',
    fontSize: '1.2rem',
    lineHeight: '2',
    textAlign: 'left',
    padding: '0 1rem'
  },
  quote: {
    margin: '0.5rem 0'
  },
  footer: {
    backgroundColor: '#3498db',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    marginTop: 'auto'
  },
  footerText: {
    margin: 0
  }
};

export default App;