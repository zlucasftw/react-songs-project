import styles from './Card.module.css';

function Card() {
    return (
        <section className={styles.card}>
            <a 
                href="https://www.youtube.com/watch?v=iPGvMTqkUok"
                rel="noreferrer noopener" 
                target="_blank">
                <img src="https://i.ytimg.com/vi/iPGvMTqkUok/mqdefault.jpg" alt="Capa" />
            </a>
        </section>
    )
}

export default Card;
