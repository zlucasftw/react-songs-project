import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <span>Bones</span>
            <nav>
                <a href="">Home</a>
                <a href="">Songs</a>
                <a href="">Favorites</a>
                <a href="">About Me</a>
            </nav>
        </header>
    );
}

export default Header;
