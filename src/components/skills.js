import React from "react"

export const Skills = () => {
  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <h3>Technical Skills</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <p style={{ textAlign: "left" }}>
            <span className="highlight">Proficient:</span> Node.js, HTML5, CSS3,
            Javascript, Express, Sequelize, PostgreSQL, PostGIS, React, Redux,
            Github, Sketch, Keynote, Victory.js, React-Native, React-Navigation
          </p>
        </div>
        <div>
          <p style={{ textAlign: "left" }}>
            <span className="highlight">Familiar:</span> Jasmine, Mocha/Chai,
            Heroku, Travis, Chart.js, Expo.io, Google Maps API,
            React-Native-Maps, Ngrok
          </p>
        </div>
      </div>
    </div>
  )
}
export default Skills
