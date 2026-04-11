import { FaBriefcase } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

const experiences = [
  {
    role: 'UI Intern',
    company: 'Exponential AI',
    period: 'Oct 2024 – Sep 2025',
    points: [
      'Developed UI features including form validations and component enhancements',
      'Collaborated with cross-functional teams to fix defects and improve UI performance',
      'Contributed to 60% of unit testing with 2000+ test cases',
      'Documented 20+ advanced testing strategies improving team productivity',
    ],
  },
  {
    role: 'Full Stack Engineer Intern',
    company: 'InternsElite',
    period: 'Jan 2024 – Oct 2024',
    points: [
      'Built interactive product pages with dynamic pricing, ratings, and comments',
      'Developed responsive UI across devices',
      'Used Firebase for backend and real-time updates',
      'Improved user interaction using CSS animations',
    ],
  },
  {
    role: 'Full Stack Engineer Trainee',
    company: 'JSpiders',
    period: 'Jul 2023 – Jan 2024',
    points: [
      'Built REST APIs using Django and Node.js',
      'Applied OOP concepts in Python projects',
      'Gained hands-on experience in JavaScript concepts like promises and async/await',
      'Developed CRUD applications and integrated databases',
    ],
  },
];

function Experience() {
  const ref = useScrollReveal();
  return (
    <section id="experience" className="section scroll-reveal" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
          <p>My professional journey</p>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item reveal-item">
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="timeline-points">
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
