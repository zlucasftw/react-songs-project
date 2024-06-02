
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import SongsList from "../../components/SongsList"
import { useFavoriteContext } from "../../contexts/Favorites"
import styles from "./Favorites.module.css"

function Favorites() {

    const { favorite } = useFavoriteContext();

    return (
        <>
            <Header />
                <Container>
                    <section className={styles.favorites}>
                        <h2>Favorites</h2>
                        { <SongsList songs={favorite} emptyHeading=":( Hey, add some favorites" /> }
                    </section>
                </Container>
            <Footer/>
        </>
    );
}

export default Favorites;