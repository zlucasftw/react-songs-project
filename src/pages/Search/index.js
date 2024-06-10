import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Search.module.css";
import songs from "../../json/db.json";
import SearchSongsList from "../../components/SearchSongsList";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Search() {

    return (
        <>
            <ScrollToTopButton />
            <Header />
            <Container>
                <section className={styles.search}>
                    <h2>Search</h2>

                    <SearchSongsList songs={songs} />

                </section>
            </Container>
            <Footer/>
        </>
    );
}

export default Search;