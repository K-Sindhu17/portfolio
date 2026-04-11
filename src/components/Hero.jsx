import { useState, useEffect, useRef, useCallback } from 'react';
import { FaArrowRight, FaEnvelope, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 400;

function Hero() {
  const [text, setText] = useState('');
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const phaseRef = useRef('typing'); // 'typing' | 'pausing' | 'deleting' | 'waiting'
  const timerRef = useRef(null);

  const tick = useCallback(() => {
    const currentRole = roles[roleIndexRef.current];

    switch (phaseRef.current) {
      case 'typing': {
        charIndexRef.current += 1;
        setText(currentRole.slice(0, charIndexRef.current));
        if (charIndexRef.current >= currentRole.length) {
          phaseRef.current = 'pausing';
          timerRef.current = setTimeout(tick, PAUSE_AFTER_TYPING);
        } else {
          timerRef.current = setTimeout(tick, TYPING_SPEED);
        }
        break;
      }
      case 'pausing': {
        phaseRef.current = 'deleting';
        timerRef.current = setTimeout(tick, DELETING_SPEED);
        break;
      }
      case 'deleting': {
        charIndexRef.current -= 1;
        setText(currentRole.slice(0, charIndexRef.current));
        if (charIndexRef.current <= 0) {
          phaseRef.current = 'waiting';
          timerRef.current = setTimeout(tick, PAUSE_AFTER_DELETING);
        } else {
          timerRef.current = setTimeout(tick, DELETING_SPEED);
        }
        break;
      }
      case 'waiting': {
        roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
        charIndexRef.current = 0;
        phaseRef.current = 'typing';
        timerRef.current = setTimeout(tick, TYPING_SPEED);
        break;
      }
    }
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(tick, TYPING_SPEED);
    return () => clearTimeout(timerRef.current);
  }, [tick]);

  return (
    <section id="home" className="hero section">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Sindhu Kodaboina</h1>
          <div className="hero-role">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-tagline">
            Building scalable web applications with clean UI and strong backend logic.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              <FaEnvelope /> Contact Me
            </a>
            <a href="https://drive.google.com/file/d/1MAWD0zze2eiOyTMxOrwpUYC-jwJxSFJ1/view?usp=sharing" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <FaDownload /> Resume
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/K-Sindhu17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sindhu-kodaboina/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="code-title">developer.js</span>
            </div>
            <pre className="code-body">
              <code>
{`const developer = {
  name: "Sindhu Kodaboina",
  role: "Full Stack Developer",
  skills: [
    "Java", "JavaScript",
    "Angular", "Node.js", "Python"
  ],
  passion: "Building scalable full-stack apps",
  available: true
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
