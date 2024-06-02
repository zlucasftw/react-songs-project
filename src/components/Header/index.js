import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <Link>
                <span to="/">Bones</span>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* Function testability, not a feature yet */}
                            <Link to="/watch">Watch</Link>
                        {/* Function testability, not a feature yet */}
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link>Songs</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link>About Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
