import { useState } from "react";
import { categories } from "../Category";
import styles from "./Form.module.css";

function Form() {

    const [ url, setUrl ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ songs, setSongs ] = useState([]);
    const [ errors, setError ] = useState('');
    /* const [ success, setSuccess ] = useState(''); */

    function urlValidation(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

        if(!regex.test(url) || url.length < 43) {
            setError('A invalid URL was submited!');
            return false;
        } else {
            return url.substring(32, 43);
        }
    }
    
    function onSave(event) {
        event.preventDefault();
        console.log(url, category);

        if (!category || category === '-') {
            /* console.log('Choose a category'); */
            setError('Choose a category!');
            return;
        } else {
            setError('');
        }

        const urlSong = urlValidation(url);
        if (urlSong && category) {
            const newSong = { url, category };
            setSongs([...songs, newSong]);
            localStorage.setItem('songs', JSON.stringify([...songs, newSong]));
            setError('You registered a new song!');
            setUrl('');
            setCategory('');
            setError('');
            return;
        } else {
            setError('Something went wrong, try again!');
        }

        

        /* if () */

        
    }
    
    return (
        <section className={styles.container}>
            <h2>Video Song Register</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>Video song URL</label>
                    <input 
                        type="text"
                        placeholder="Type the song video URL"
                        required="required"
                        value={url}
                        onChange={ event => setUrl(event.target.value) }
                        minLength="43"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Category</label>
                    <select
                        required="required"
                        value={category}
                        onChange={ event => setCategory(event.target.value) }
                    >
                        <option value="-">Choose a song category</option>
                        { categories.map(category => {
                            return <option value={category}>{category}</option>
                        }) }
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    { errors }{/* { success }  */}
                    
                </div>
            </form>
        </section>
    );
}

export default Form;