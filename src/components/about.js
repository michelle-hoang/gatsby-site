import React from "react"
import Image from "./image"

export const About = () => {
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "1rem" }}
      >
        <div
          style={{
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingTop: "3rem",
            width: "50%",
          }}
        >
          <Image />
        </div>
        <div
          style={{
            width: "50%",

            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <p style={{ textAlign: "left" }}>
            I am a{" "}
            <span className="highlight">
              neuroscientist-turned-software-engineer
            </span>
            .
          </p>

          <p style={{ textAlign: "left" }}>
            As a researcher, I loved the iterative process of experimental
            design, implementation, troubleshooting, and analysis.
          </p>
          <p style={{ textAlign: "left" }}>
            While studying the human brain, I worked with novel technologies,
            that required programming knowledge.
          </p>
          <p style={{ textAlign: "left" }}>
            As the architect of my own career, I decided to forgo a traditional
            research path and become a software developer.
          </p>
          <p style={{ textAlign: "left" }}>
            In Sept 2019, I graduated from Fullstack Academy's Software
            Engineering Immersive.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About
