import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
// import { useParams } from 'react-router-dom';
import { HOME_URL } from 'utils/requests';
import './styles.css'


function Navbar() {
  // const params = new URLSearchParams(window.location.search)

  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <a href={`${HOME_URL}`}>
            <h1>DSMovie</h1>
          </a>
          <a href="https://github.com/jnsal">
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">/jnsal</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;