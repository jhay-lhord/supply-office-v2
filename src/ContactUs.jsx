import './App.css'; // Optional: Move styles to a separate CSS file

const ProgrammerInfo = () => {
  const members = [
    {
      name: 'Jaylord Manila',
      contact: '09123456789',
      email: 'jaylordmanila@gmail.com',
      image: '/1.png',
    },
    {
      name: 'Ariel Mosqueda',
      contact: '09123475843',
      email: 'ayeahmosqueda@gmail.com',
      image: '/2.png',
    },
    {
      name: 'Ron Ryan Lataza',
      contact: '09123475843',
      email: 'ronryan.lataza@gmail.com',
      image: '/3.png',
    },
    {
      name: 'Jade Anthony Ortega',
      contact: '09123475843',
      email: 'jadeortega@gmail.com',
      image: '/4.png',
    },
    {
      name: 'Chesty Clint De Leon',
      contact: '09123475843',
      email: 'chesty@gmail.com',
      image: '/5.png',
    },
    {
      name: 'Crislyn Tanudtanud',
      contact: '09123475843',
      email: 'crislyn@gmail.com',
      image: '/6.png',
    },
  ];

  return (
    <div style={styles.body}>
      {/* <nav style={styles.nav}>
        <a href="index.html" style={styles.navLink}>
          Home
        </a>
        <a href="about-us.html" style={styles.navLink}>
          About Us
        </a>
        <a href="contact-us.html" style={styles.navLink}>
          Contact Us
        </a>
      </nav> */}
      <h1 style={styles.title}>SlapSoil</h1>
      <div style={styles.memberContainer}>
        {members.map((member, index) => (
          <div key={index} style={styles.member}>
            <img
              src={member.image}  
              alt={`Member ${index + 1}`}
              style={styles.memberImage}
            />
            <h2 style={styles.memberName}>{member.name}</h2>
            <p style={styles.memberDetails}>Contact: {member.contact}</p>
            <p style={styles.memberDetails}>Email Address: {member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: 'rgb(56, 56, 219)',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    margin: 0,
    height: '100vh',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '20px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  memberContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },
  member: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  memberImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  memberName: {
    margin: '10px 0 5px',
    fontSize: '20px',
  },
  memberDetails: {
    margin: '5px 0',
  },
};

export default ProgrammerInfo;
