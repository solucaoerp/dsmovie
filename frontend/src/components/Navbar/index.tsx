import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import './styles.css';

export default function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie_nav_content">
                    <h1>DSMovie</h1>

                    <a href="https://github.com/solucaoerp">
                        <div className="dsmovie_contact_container">
                            <GitHubIcon />
                            <p className="dsmovie_contact_link">/solucaoerp</p>
                        </div>
                    </a>

                </div>

            </nav>
        </header>
    );
}