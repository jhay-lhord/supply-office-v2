const AboutUs = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1>About Us</h1>
          <h2>Test</h2>
          <p>
            Welcome to our collective digital space, where innovation meets
            collaboration! We are a dynamic group of six passionate individuals,
            all pursuing Bachelor of Science in Information Technology (BSIT)
            degree. As aspiring students in the field of technology, we have
            come together to combine our diverse skills, knowledge, and
            creativity. This platform serves as a testament to our shared
            commitment to learning, growth, and exploration in the ever-evolving
            landscape of information technology. Join us on this journey with
            our Project Owner Engr. Ryan Teo as we navigate the world of IT,
            leveraging our collective expertise to tackle challenges, spark
            innovation, and make meaningful contributions to the ever-expanding
            digital realm as we learn to explore and navigate the realm of
            Github with the help of our Scrum Master. Get to know our team,
            explore our individual strengths, and discover the synergy that
            fuels our collaborative spirit. Welcome to the intersection of
            passion and technology as you witness our progress in doing this
            project, where the possibilities are limitless!
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: "rgb(189, 189, 44)",
    fontFamily: "Arial, sans-serif",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    height: "100vh",
    margin: 0,
  },
  nav: {
    display: "flex",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "20px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    padding: "4rem",
    fontSize: "1.5rem",
  },
  content: {
    color: "white",
  },
};

export default AboutUs;
