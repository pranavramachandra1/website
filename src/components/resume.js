import React from "react"
import { Link } from "react-router-dom"

// In your component
function Resume() {
    return (
      <div>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cv-link"
        >
          View My CV
        </a>
      </div>
    );
  }

  export default Resume;