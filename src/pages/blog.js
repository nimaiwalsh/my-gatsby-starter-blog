import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostListing from '../components/ListingPost/PostListing'
import FadeInUp from '../components/FadeInUp'

const Blog = ({ data }) => {
  return (
    <Layout>
      <FadeInUp>
        <section>
          <h1>Blog</h1>
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <PostListing post={node} key={node.id} />
          ))}
        </section>
      </FadeInUp>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query PostList {
    allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
      totalCount
      edges {
        node {
          id
          createdAt(formatString: "DD MMM YYYY")
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
