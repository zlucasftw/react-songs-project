import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import favoriteIcon from "./favoriteicon.png"
import unfavoriteIcon from "./unfavoriteicon.png"
import { useFavoriteContext } from '../../contexts/Favorites';

function Card({ id }) {

    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = isFavorite ? unfavoriteIcon : favoriteIcon;

    return (
        <section className={styles.card}>

            <Link to={`/watch/${id}`}>
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="Video cover"  className={styles.cover} />
            </Link>
            <figure className={styles.icon}>
                <img 
                src={icon} 
                alt="Favorite icon"
                onClick={() => addFavorite({id})}
            />
            </figure>
            
        </section>
    )
}

export default Card;
