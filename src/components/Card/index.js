import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ id }) {
    return (
        <section className={styles.card}>

            <Link to={`/watch/${id}`}>
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
            </Link>
            
        </section>
    )
}

export default Card;
