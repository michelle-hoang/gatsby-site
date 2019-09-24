import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogIndex({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <h2 style={{ textAlign: "center", marginBottom: `2rem` }}>
        What's on my mind?
      </h2>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignContent: `center`,
        }}
      >
        <div className="blogPosts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="blog-post-preview" key={post.id}>
                  <h3>
                    <Link className="blogPostTitle" to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  <h4>{post.frontmatter.date}</h4>
                  <p>{post.excerpt}</p>
                  <hr />
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
