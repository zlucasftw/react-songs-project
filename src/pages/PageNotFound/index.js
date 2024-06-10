import pagenotfound from './pagenoutfound.gif';
import styles from "./PageNotFound.module.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PageNotFound() {
    return (
        <>
            <Header/>
                <section className={styles.container}>
                    <h2>ERROR 404! CONTENT NOT FOUND</h2>
                    <img src={pagenotfound} alt="Looping gif representing a not found page"/>
                </section>
            <Footer/>
        </>
    );
}

export default PageNotFound;
