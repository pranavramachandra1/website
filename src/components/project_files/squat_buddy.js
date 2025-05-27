import React from "react"
import { Link } from "react-router-dom"
import './squat_buddy.css'

function SquatBuddy() {
  return (
    <div className="squat-buddy-container">
      <div className="back-link">
        <Link to="/projects">← Back to Projects & Blog</Link>
      </div>
      
      <header className="project-header">
        <h1>squat_buddy</h1>
        <p className="subtitle">Python application that gives you biomechanical feedback on your squatting form</p>
      </header>

      <div className="project-content">
        <section className="overview">
          <p>
            I developed a <a href="https://squatbuddy-app-a8afe5b7d5f8.herokuapp.com" target="_blank" rel="noopener noreferrer">python app</a> that uses Google's <a href="https://www.tensorflow.org/hub/tutorials/movenet" target="_blank" rel="noopener noreferrer">movenet</a> to give you feedback on your squatting form.
          </p>
        </section>

        <section className="learnings">
          <h2>Learnings</h2>
          <ul>
            <li>
              <strong>SWE: Deploying a complex app:</strong> this was a 3 step process: developing the model, then deploying a complex environment to host my model, then putting together the web app
            </li>
            <li>
              <strong>ML: Stitching together different models:</strong> I went through a variety of ideas, but the most reasonable was using a lightweight 2D model feeding into a lightweight MLP/RFR.
            </li>
            <li>
              <strong>A bunch of the extra stuff in between:</strong> There was a lot to be learned from building, but I learned a lot from the physical deployment stuff, such as building Docker files, and working with a variety of services to develop, build, and host this app (e.g. GCP, AWS S3, EC2, Heroku, etc.)
            </li>
          </ul>
        </section>

        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>squat_buddy can project google's movenet model onto a video of you squatting</li>
            <li><strong>Defect detection:</strong> I trained a variety of models (random forest, MLPs: essentially a lightweight model that can run inferences fast!)</li>
            <li><strong>Reasonable-speed video processing:</strong> processes videos at a reasonable pace for you to analyze your form during your rest!</li>
          </ul>
        </section>

        <section className="in-progress">
          <h2>In Progress</h2>
          <ul>
            <li><strong>Making the model faster.</strong> Currently, I have deployed my model as a microservice, and use this exposed endpoint to make batch calls a bit more efficient.</li>
            <li><strong>Increasing the accuracy of the model:</strong> currently, the model is a multi-class classifier. I have the app working (which is cool), but I am diving deeper on making this model a bit more robust.</li>
          </ul>
        </section>

        <section className="system-design">
          <p>Finally, here's a sketch of the system I designed to host SquatBuddy:</p>
          <img 
            src="/squatbuddy_system.png" 
            alt="SquatBuddy System Architecture Diagram"
            className="system-diagram"
          />
        </section>

        <section className="cta">
          <p>Feel free to checkout my project <a href="https://squatbuddy-app-a8afe5b7d5f8.herokuapp.com" target="_blank" rel="noopener noreferrer">here</a>!</p>
        </section>
      </div>
    </div>
  )
}

export default SquatBuddy;