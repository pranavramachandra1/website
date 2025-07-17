import React, { useState } from "react";

export const Homepage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="portfolio-home">
      <div className="profile-section">
        <img
          src="/headshot.jpg"
          alt="Pranav Ramachandra"
          className="profile-img"
        />
        <h1 className="name">Pranav Ramachandra</h1>
        <div className="subtitle">Software Engineer</div>
        <div className="location">New York, NY</div>
        <p className="bio">
          UC Berkeley alum, working as an engineer at Spotify. Specifically, I'm a data engineer on the personalization team. My background is in chemical engineering, and I have found myself interested in distributed systems, ML, and full stack projects. 
        </p>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/pranavramachandra/" className="social-link" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="LinkedIn" className="icon">💼</span> LinkedIn
          </a>
          <a href="https://github.com/pranavramachandra1" className="social-link" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="GitHub" className="icon">🐙</span> GitHub
          </a>
        </div>
      </div>
      <div className="experience-section">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-icon">
              <img 
                src="https://media.licdn.com/dms/image/v2/C560BAQFkDzx_7dqq3A/company-logo_100_100/company-logo_100_100/0/1631377935713?e=1753920000&v=beta&t=dDAnTmukRufv1jb106UQETWVMTJECO1iB2VleNDzARY" 
                alt="Spotify Logo" 
                style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(60,60,60,0.08)' }}
              />
            </span>
            <div className="timeline-content">
              <div className="role">Spotify | Data Engineer</div>
              <div className="duration">June 2025 - Present</div>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-icon">
              <img 
                src="https://media.licdn.com/dms/image/v2/D560BAQEuoRzwox4xdQ/company-logo_100_100/company-logo_100_100/0/1728253824329?e=1753920000&v=beta&t=1Mu9t_QzsM14GY464QUuKLpJiO8Xh5YJ7z80lA7cG30" 
                alt="Bicameral Logo" 
                style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(60,60,60,0.08)' }}
              />
            </span>
            <div className="timeline-content">
              <div className="role">Bicameral | Software Engineering Intern</div>
              <div className="duration">Jan 2025 - Mar 2025</div>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-icon">
              <img 
                src="https://media.licdn.com/dms/image/v2/C560BAQHRNkb48rukMQ/company-logo_100_100/company-logo_100_100/0/1630662793533/quantumscape_logo?e=1753920000&v=beta&t=vJJs_7_WYXTA9bvsiubz4DUI74DQfudONZYGd2JeQqs" 
                alt="QuantumScape Logo" 
                style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(60,60,60,0.08)' }}
              />
            </span>
            <div className="timeline-content">
              <div className="role">QuantumScape | Software Engineering Intern</div>
              <div className="duration">May 2024 - Aug 2024</div>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-icon">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4E0BAQFfc1NOEp9DgA/company-logo_100_100/company-logo_100_100/0/1640018826417/lawrence_berkeley_national_laboratory_logo?e=1753920000&v=beta&t=nr-K4TM2qRFk0QdxR0Fw3BHEMrFKtSVAvhsyYcMh6PI" 
                alt="Lawrence Berkeley National Lab Logo" 
                style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(60,60,60,0.08)' }}
              />
            </span>
            <div className="timeline-content">
              <div className="role">Lawrence Berkeley National Lab | Electrochemistry Researcher</div>
              <div className="duration">Sep 2021 - May 2024</div>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-icon">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4D0BAQHUcu98SZ2TVw/company-logo_100_100/company-logo_100_100/0/1630576446368/tesla_motors_logo?e=1753920000&v=beta&t=wvmVVO_DvZZpBm3flY2t-6ey9h8ieiSt1wvsktpW5yg" 
                alt="Tesla Logo" 
                style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(60,60,60,0.08)' }}
              />
            </span>
            <div className="timeline-content">
              <div className="role">Tesla | Data Science & Cell Engineering Intern</div>
              <div className="duration">Jan 2023 - Aug 2024</div>
            </div>
          </div>
          {showMore && (
            <>
                <div className="timeline-item">
                    <span className="timeline-icon">
                    <img 
                        src="https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_100_100/company-logo_100_100/0/1738855736997/amazon_web_services_logo?e=1753920000&v=beta&t=4KiP83VrTst7My0njbum7Q502qv9L8fQZFNMh5y7y8U"
                        alt="AWS Logo" 
                        style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(60,60,60,0.08)' }}
                    />
                    </span>
                    <div className="timeline-content">
                    <div className="role">AWS | Contract Software Developer</div>
                    <div className="duration">Sep 2022 - Mar 2023</div>
                    </div>
                </div>
              <div className="timeline-item">
                <span className="timeline-icon">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/C560BAQFIzPIYfEdWdw/company-logo_100_100/company-logo_100_100/0/1630597725146/chevron_logo?e=1753920000&v=beta&t=iBDqKd3hEBB-VyRy6To3b7jYaEHzNHl51FMaH9yfSTE"
                    alt="Chevron Logo" 
                    style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(60,60,60,0.08)' }}
                  />
                </span>
                <div className="timeline-content">
                  <div className="role">Chevron | Process Engineering Intern</div>
                  <div className="duration">May 2022 - Aug 2022</div>
                </div>
              </div>
            </>
          )}
          <button 
            onClick={() => setShowMore(!showMore)}
            className="show-more-button"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
      <div className="education-section">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
          <span className="timeline-icon">
              <img 
                src="https://media.licdn.com/dms/image/v2/D560BAQGwjF_5CYj_JQ/company-logo_100_100/company-logo_100_100/0/1732135669731/uc_berkeley_logo?e=1753920000&v=beta&t=WFK7bdpatAIOHO9hcgxhsAD1yZfAVdYndAEVPJPrb0s"
                alt="Tesla Logo" 
                style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(60,60,60,0.08)' }}
              />
            </span>
            <div className="timeline-content">
              <div className="role">University of California, Berkeley</div>
              <div className="duration">B.S. Chemical Engineering, 2020 - 2024</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .portfolio-home {
          max-width: 600px;
          margin: 40px auto;
          padding: 32px 24px;
          background: #fafbfc;
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(60,60,60,0.07);
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
        }
        .profile-section {
          text-align: center;
          margin-bottom: 40px;
        }
        .profile-img {
          width: 110px;
          height: 110px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(60,60,60,0.10);
          margin-bottom: 18px;
        }
        .name {
          font-size: 2.1rem;
          font-weight: 700;
          margin: 0;
        }
        .subtitle {
          color: #6c7a89;
          font-size: 1.1rem;
          margin-top: 4px;
        }
        .location {
          color: #b0b8c1;
          font-size: 1rem;
          margin-bottom: 18px;
        }
        .bio {
          color: #444e5e;
          font-size: 1.08rem;
          margin: 0 auto 28px auto;
          max-width: 440px;
        }
        .social-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        .social-link {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f3f4f6;
          color: #222;
          text-decoration: none;
          padding: 8px 18px;
          border-radius: 8px;
          font-size: 1rem;
          box-shadow: 0 1px 4px rgba(60,60,60,0.04);
          transition: background 0.2s;
        }
        .social-link:hover {
          background: #e6e8eb;
        }
        .icon {
          font-size: 1.2em;
        }
        .experience-section {
          margin-top: 32px;
        }
        .experience-section h2 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 18px;
        }
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .timeline-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #f6f7f9;
          border-radius: 10px;
          padding: 14px 18px;
          box-shadow: 0 1px 4px rgba(60,60,60,0.03);
        }
        .timeline-icon {
          font-size: 1.5em;
          margin-top: 2px;
        }
        .timeline-content {
          flex: 1;
        }
        .role {
          font-weight: 500;
          font-size: 1.08rem;
        }
        .duration {
          color: #a0a7b4;
          font-size: 0.98rem;
        }
        @media (max-width: 700px) {
          .portfolio-home {
            padding: 16px 4vw;
          }
        }
        .show-more-button {
          background: none;
          border: none;
          color: #4b5c6b;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 8px 16px;
          margin-top: 12px;
          cursor: pointer;
          transition: color 0.18s;
          display: block;
          margin-left: 36px;
        }
        .show-more-button:hover {
          color: #181c22;
        }
      `}</style>
    </div>
  );
}

export default Homepage;