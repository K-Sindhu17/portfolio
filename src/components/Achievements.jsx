import { FaTrophy } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Achievements.css';

const achievements = [
  {
    title: 'TCS CodeVita',
    description: 'Secured Top 50 rank among 20,000+ participants',
    icon: <FaTrophy />,
  },
];

function Achievements() {
  const ref = useScrollReveal();
  return (
    <section id="achievements" className="section scroll-reveal" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Achievements</h2>
          <p>Milestones I'm proud of</p>
          <div className="section-divider"></div>
        </div>

        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div key={i} className="achievement-card reveal-item">
              <div className="achievement-icon">{a.icon}</div>
              <div className="achievement-info">
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
              <div className="achievement-badge">
                <span>Top 50</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
