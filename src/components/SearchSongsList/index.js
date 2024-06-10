import { useEffect, useState } from "react";
import SongsList from "../SongsList";
import styles from "./SearchSongsList.module.css";
import Loader from "../Loader";


// Filtering songs by category or title
function filterSongs(songs, searchText) {
    return songs.filter((song) => song.category.includes(searchText) ||
    song.title.includes(searchText));
}

function SearchSongsList({ songs }) {

    const [ searchText, setSearchText ] = useState('');
    const filteredSongs = filterSongs(songs, searchText);

    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
    }, [])

    return (
        <section className={styles.container}>
            <input 
                type="search"
                placeholder="Hey you! Here's where you type..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)} 
            />
            { 
                loading ? <Loader /> :
                <SongsList 
                    songs={filteredSongs}
                    emptyHeading={`Nop! ${searchText} isn't here`} 
                />
            }
        </section>
    );
}

export default SearchSongsList;