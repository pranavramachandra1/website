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
          <Link to="/projects/how-to-actually-get-good-at-dynamic-programming-problems" className="project-link">
            <h2>How to Actually Get Good at Dynamic Programming Problems</h2>
            <p>An overview on how to get over the hump of understanding DP problems</p>
          </Link>
        </div>
        
        <div className="project-item">
          <Link to="/projects/squat_buddy" className="project-link">
            <h2>squat_buddy</h2>
            <p>Python application that gives you biomechanical feedback on your squatting form</p>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Projects;