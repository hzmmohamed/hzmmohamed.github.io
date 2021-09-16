import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout pageTitle={data.site.siteMetadata.title}>
      <p>I'm making this by not following the Gatsby Tutorial.</p>
      <StaticImage 
        alt=""
        src="../images/garden.jpg"
      />
      <p>Test Paragraph</p>
    </Layout>
  )
}

export default IndexPage