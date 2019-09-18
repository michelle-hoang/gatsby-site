import React from "react"
import Image from "./image"

const left = { textAlign: `left` }

export const About = () => {
  return (
    <div>
      <div className="about">
        <div className="pic">
          <h3 style={{ textAlign: "center" }}>About Me</h3>
          <Image />
        </div>
        <div className="info">
          <p style={left}>
            I am a{" "}
            <span className="highlight">
              neuroscientist-turned-software-engineer
            </span>
            .
          </p>
          <p style={left}>
            As a researcher, I loved the iterative process of experimental
            design, implementation, troubleshooting, and analysis.
          </p>
          <p style={left}>
            While studying the human brain, I worked with novel technologies
            that required programming knowledge.
          </p>
          <p style={left}>
            As the architect of my own career, I decided to forgo a traditional
            research path and become a software developer.
          </p>
          <p style={left}>
            In Sept 2019, I graduated from Fullstack Academy's Software
            Engineering Immersive.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
