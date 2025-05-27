import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="custom-navbar">
            <div className="navbar-left">
                <span className="navbar-name"></span>
            </div>
            <div className="navbar-center">
                <Link className="navbar-link" to="/projects">Projects & Blog</Link>
                <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="navbar-link"
                    >
                    Resume
                </a>
            </div>
            <div className="navbar-right">
                <Link to="/">
                    <img src="/headshot.jpg" alt="Profile" className="navbar-profile-img" />
                </Link>
            </div>
            <style>{`
                .custom-navbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 18px 36px 18px 32px;
                    background: #f5f6f8;
                    border-radius: 18px 18px 0 0;
                    box-shadow: 0 2px 8px rgba(60,60,60,0.04);
                    margin-bottom: 8px;
                }
                .navbar-left {
                    flex: 1;
                    display: flex;
                    align-items: center;
                }
                .navbar-name {
                    font-size: 1.35rem;
                    font-weight: 700;
                    color: #181c22;
                    letter-spacing: -0.5px;
                }
                .navbar-center {
                    flex: 2;
                    display: flex;
                    justify-content: flex-end;
                    gap: 36px;
                }
                .navbar-link {
                    color: #181c22;
                    text-decoration: none;
                    font-size: 1.08rem;
                    font-weight: 500;
                    margin: 0 0.5rem;
                    transition: color 0.18s;
                }
                .navbar-link:hover {
                    color: #4b5c6b;
                }
                .navbar-right {
                    flex: 0;
                    margin-left: 32px;
                }
                .navbar-profile-img {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    object-fit: cover;
                    box-shadow: 0 1px 4px rgba(60,60,60,0.10);
                    border: 3px solid #f3e7db;
                    transition: box-shadow 0.18s;
                }
                .navbar-profile-img:hover {
                    box-shadow: 0 2px 12px rgba(60,60,60,0.13);
                }
                @media (max-width: 700px) {
                    .custom-navbar {
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 12px 8vw 12px 8vw;
                    }
                    .navbar-center {
                        justify-content: flex-start;
                        gap: 18px;
                        margin-top: 8px;
                    }
                    .navbar-right {
                        margin-left: 0;
                        margin-top: 10px;
                    }
                }
            `}</style>
        </nav>
    )
}