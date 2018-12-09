const path = require('path');

// Create a new pages for different content types
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    // Blog Post pages
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: `/blog/${node.slug}`,
          //Component (Template) for the new page
          component: path.resolve('./src/templates/PostPage.js'),
          //Variables to pass to the template page query
          context: {
            slug: node.slug,
          },
        });
      });      
    });

    // Book Review Pages
    graphql(`
      {
        allContentfulBookReview {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBookReview.edges.forEach(({ node }) => {
        createPage({
          path: `/bookreviews/${node.slug}`,
          // Component (Template) for the new page
          component: path.resolve('./src/templates/BookReviewPage.js'),
          // Variables to pass to the template page query
          context: {
            slug: node.slug,
          },
        });
      });
    });

    resolve();
  });
};