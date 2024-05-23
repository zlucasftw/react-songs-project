/* Function testability, not a feature yet */
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css";
import { useParams } from "react-router-dom";
import songs from "../../json/db.json";
import PageNotFound from "../PageNotFound";

function Watch() {
    const params = useParams();
    const song = songs.find((song) => { return song.id === params.id });
    /* console.log(songs); */
    if (!song) { return <PageNotFound /> }

    return (
        <>
        <Header />
        <Container>
            <section className={styles.watch}>
                <iframe 
                    width="854" height="480" 
                    src={`https://www.youtube.com/embed/${song.id}`}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </section>
        </Container>
        <Footer />
        </>
    );
}

export default Watch;
/* Function testability, not a feature yet */