import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ArrowIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "arrow-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export const InfoButton = () => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        alignContent: `center`,
        border: `2px solid #1f3b66`,
        justifyContent: `center`,
        width: `8rem`,
        padding: `0.25rem`,
        boxShadow: `5px 5px #1f3b66`,
      }}
    >
      <div
        style={{
          paddingRight: `0.5rem`,
          marginLeft: `0.25rem`,
        }}
      >
        More Info
      </div>
      <div
        style={{
          alignContent: `center`,
          justifyContent: `center`,
          paddingTop: `0.15rem`,
          width: `18px`,
        }}
      >
        <ArrowIcon />
      </div>
    </div>
  )
}
