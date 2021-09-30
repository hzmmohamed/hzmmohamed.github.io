import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
    return (
      <Layout pageTitle="hzmmohamed - posts">
        {data.allMdx.nodes.map((node) => (
          <article>
            <span>
              <Link
                to={`/posts/${node.slug}`}
                style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
              >
                {node.frontmatter.title}
              </Link>
            </span>
            &emsp;
            <span>{node.frontmatter.date}</span>
          </article>
        ))}
      </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                slug
            }
        }
    }
`

export default BlogPage
