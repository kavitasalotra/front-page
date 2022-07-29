exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.allMdx.edges.forEach((edge) => {
    const { slug } = edge.node;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/BlogView.js`),
      context: { slug },
    });
  });
};
