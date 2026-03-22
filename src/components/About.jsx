import { FaLightbulb, FaPaintBrush, FaServer, FaBug, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const strengths = [
  { icon: <FaLightbulb />, title: 'Problem Solving', desc: 'Analytical thinking to solve complex challenges' },
  { icon: <FaPaintBrush />, title: 'UI Development', desc: 'Clean, intuitive, and responsive interfaces' },
  { icon: <FaServer />, title: 'Backend Integration', desc: 'RESTful APIs and database management' },
  { icon: <FaBug />, title: 'Testing & Debugging', desc: 'Comprehensive testing with high coverage' },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I am a passionate Full Stack Developer with hands-on experience in building
              scalable and user-friendly web applications. I have worked with technologies
              like JavaScript, Angular, Node.js, Python, and databases such as MySQL and Redis.
              I enjoy designing intuitive user interfaces, optimizing performance, and solving
              real-world problems through code.
            </p>
            <div className="about-objective">
              <h3>Career Objective</h3>
              <p>
                To build impactful software solutions while continuously improving my
                technical and problem-solving skills.
              </p>
            </div>
            <div className="about-education">
              <FaGraduationCap className="edu-icon" />
              <div>
                <h4>Bachelor of Technology in Computer Science</h4>
                <p className="edu-year">Graduated 2023</p>
                <p className="edu-courses">
                  <strong>Coursework:</strong> Data Structures & Algorithms, Python, DBMS,
                  Operating Systems, OOPs
                </p>
              </div>
            </div>
          </div>

          <div className="about-strengths">
            <h3>Core Strengths</h3>
            <div className="strengths-grid">
              {strengths.map((s, i) => (
                <div key={i} className="strength-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="strength-icon">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
