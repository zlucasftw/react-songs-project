import Card from "../Card";
import styles from "./SongsList.module.css"

function SongsList( { songs, emptyHeading }) {

    const count = songs.length;
    let heading = emptyHeading;

    if (count > 0) {
        const noun = count > 1 ? 'Songs' : 'Song';
        heading = `${count} ${noun}`; 
    }

    return (
            <>
                <h2>{heading}</h2>
                <section className={styles.songs}>
                    { songs.map((song) => <Card id={song.id} key={song.id} /> )}
                </section>
            </>
    );
}

export default SongsList;
