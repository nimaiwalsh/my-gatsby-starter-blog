import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'
import { PageWrapper } from '../components/styles/StyledComponents'

class PostPage extends Component {
  render() {
    const { data } = this.props
    // Loading status
    if (!data) {
      return <article>Loading...</article>
    }

    return (
      <Layout>
        <FadeInUp>
          <PageWrapper>
            <Link to="/blog">Back</Link>
            <article>
              <h1>{data.contentfulBlogPost.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
                }}
              />
              <div>
                <p>
                  Posted with love on{' '}
                  <time>{data.contentfulBlogPost.createdAt}</time>
                </p>
              </div>
            </article>
          </PageWrapper>
        </FadeInUp>
      </Layout>
    )
  }
}

PostPage.propTypes = {
  data: PropTypes.any
}

export default PostPage

// The slug from this page is used to retrieve the correct data
// The $slug argument is passed from the create page 'context' from gatsby-node.js
export const pageQuery = graphql`
  query BlogPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      createdAt(formatString: "DD MMM YYYY")
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
