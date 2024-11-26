const HomePage = () => {
  return (
    <div style={styles.body}>
      <div style={styles.content}>
        <h1 style={styles.homeText}>Welcome</h1>
        <h1>Supply Office Management System</h1>
        <h2>Members</h2>
        <h3>Jaylord Manila</h3>
        <h3>Jade Ortega</h3>
        <h3>Crislyn Tanudtanud</h3>
        <h3>Ron Ryan Lataza</h3>
        <h3>Ariel Mosqueda</h3>
        <h3>Chesty Clint Deleon</h3>
        <h4>[SlapSoil 2024]</h4>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: 'rgb(232, 66, 66)',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100vh',
    margin: 0,
  },
  nav: {
    position: 'absolute',
    top: 0,
    padding: '1.5rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '20px',
  },
  content: {
    textAlign: 'center',
  },
  homeText: {
    fontSize: '3rem',
  },
};

export default HomePage;
