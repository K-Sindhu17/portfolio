import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'sindhukodaboina2002@gmail.com',
    href: 'mailto:sindhukodaboina2002@gmail.com',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91 6305333263',
    href: 'tel:+916305333263',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'K-Sindhu17',
    href: 'https://github.com/K-Sindhu17',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'sindhu-kodaboina',
    href: 'https://www.linkedin.com/in/sindhu-kodaboina/',
  },
];

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's build something amazing together</p>
          <div className="section-divider"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to new opportunities, collaborations, and interesting projects.
              Feel free to reach out!
            </p>
            <div className="contact-cards">
              {contactInfo.map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card">
                  <div className="contact-card-icon">{c.icon}</div>
                  <div>
                    <p className="contact-label">{c.label}</p>
                    <p className="contact-value">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
