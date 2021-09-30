import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx' // highlight-line
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p style={{fontSize:'30px'}}>{data.mdx.frontmatter.title}</p>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      body
    }
  }
`

export default BlogPost
