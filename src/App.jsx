import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const App = () => {
  return (
    <Router >
      <nav style={styles.nav}>
        <Link to="/supply-office-v2/" style={styles.navLink}>Home</Link>
        <Link to="/supply-office-v2/about-us" style={styles.navLink}>About Us</Link>
        <Link to="/supply-office-v2/contact-us" style={styles.navLink}>Contact Us</Link>
      </nav>
      <Routes>
        <Route path="/supply-office-v2/" element={<Home />} />
        <Route path="/supply-office-v2/about-us" element={<AboutUs />} />
        <Route path="/supply-office-v2/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

const styles = {

  nav: {
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    padding: '1.5rem',
    width: '100%'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: "0 15px",
    fontSize: "20px",
    fontFamily: 'Arial, sans-serif',
  }
};

export default App;
