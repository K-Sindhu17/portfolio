import { FaCode, FaPalette, FaServer, FaTools, FaVial } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming',
    icon: <FaCode />,
    skills: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript'],
    color: '#6c63ff',
  },
  {
    title: 'Frontend',
    icon: <FaPalette />,
    skills: ['HTML5', 'CSS3', 'Angular', 'SCSS', 'Bootstrap'],
    color: '#00d2ff',
  },
  {
    title: 'Backend & Databases',
    icon: <FaServer />,
    skills: ['Node.js', 'Django', 'MySQL', 'Redis'],
    color: '#27c93f',
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools />,
    skills: ['Git', 'GitHub', 'Docker', 'Firebase', 'CI/CD'],
    color: '#ffa500',
  },
  {
    title: 'Testing',
    icon: <FaVial />,
    skills: ['Jasmine', 'Jest', 'Karma', 'Istanbul'],
    color: '#e91e8c',
  },
];

function Skills() {
  const ref = useScrollReveal();
  return (
    <section id="skills" className="section scroll-reveal" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>Technologies I work with</p>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-category reveal-item" style={{ '--cat-color': cat.color }}>
              <div className="skill-category-header">
                <div className="skill-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
