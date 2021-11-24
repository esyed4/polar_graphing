import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">

            <a className="navbar-brand" href="#" title="Home" id="logo">Erfan Syed</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="https://erfansyed.com">Blog</a>
              </div>
            </div>

          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
