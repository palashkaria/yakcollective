import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.png';

const items = [
  { path: '/projects/', label: 'Projects' },
  { path: '/writings/', label: 'Writings' },
  { path: '/members/', label: 'Members' },
  { path: 'https://yakcollective.substack.com/', label: 'Newsletter' },
  { path: '/about/', label: 'About' },
  { path: '/join/', label: 'Join' },
];

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  render() {
    return (
      <nav className="row items-center justify-between bg-white px-5 py-3 container flex items-center justify-between flex-wrap bg-white px-5 py-3 container lg:flex-row flex-col">
        <a href="/" className="mx-3 pr-5">
          <img
            className="bg-black"
            src={logo}
            alt="Yak Collective"
            style={{ width: '35px', height: '35px' }}
          />
        </a>
        <div className={`lg:ml-auto flex items-center w-auto`}>
          <div className="text-center">
            {items.map((item) => (
              <Link
                className="inline-block mr-4 py-2 mt-0 py-0 text-gray-800 text-left text-lg"
                to={item.path}
                key={item.path}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
