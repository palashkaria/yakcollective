import React from 'react';
import { Link } from 'gatsby';

import facebook from '../img/social/facebook.svg';
import linkedin from '../img/social/linkedin.svg';
import twitter from '../img/social/twitter.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="flex">
            <a
              title="facebook"
              href="https://www.facebook.com/theyakcollective/"
              className="mr-5"
            >
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '18px', height: '18px' }}
              />
            </a>
            <a
              title="twitter"
              href="https://twitter.com/yak_collective"
              className="mr-5"
            >
              <img
                src={twitter}
                alt="Twitter"
                style={{ width: '18px', height: '18px' }}
              />
            </a>
            <a
              title="linkedin"
              href="https://www.linkedin.com/company/yak-collective/"
              className="mr-5"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                style={{ width: '18px', height: '18px' }}
              />
            </a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
