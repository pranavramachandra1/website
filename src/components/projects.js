import React from "react"
import { Link } from "react-router-dom"
import './projects.css'

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects & Blog Posts</h1>

      <div className="blog-posts">
        <p>More coming soon!</p>
      </div>
      
      <div className="project-list">
        <div className="project-item">
          <Link to="/projects/squat_buddy" className="project-link">
            <h2>squat_buddy</h2>
            <p>Python application that gives you biomechanical feedback on your squatting form</p>
          </Link>
        </div>
        
        {/* Add more projects here as you create them */}
      </div>
    </div>
  )
}

export default Projects;