import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import RenderHTML from '../components/RenderHTML';

export const IndexPageTemplate = ({ mainpitch }) => (
  <section>
    <div className="container">
      <h1 className="title md:text-5xl text-3xl">{mainpitch.title}</h1>
      <RenderHTML className="md:text-xl text-base">
        {mainpitch.description}
      </RenderHTML>
    </div>
  </section>
);

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate mainpitch={frontmatter.mainpitch} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          description
        }
      }
    }
  }
`;
