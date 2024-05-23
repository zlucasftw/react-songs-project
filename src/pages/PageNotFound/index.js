import pagenotfound from './pagenoutfound.gif';
import styles from "./PageNotFound.module.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PageNotFound() {
    return (
        <>
            <Header/>
                <section className={styles.container}>
                    <h2>Hey! Não consegui encontrar esse conteúdo!</h2>
                    <img src={pagenotfound} alt="Imagem de para página não localizada"/>
                </section>
            <Footer/>
        </>
    );
}

export default PageNotFound;
