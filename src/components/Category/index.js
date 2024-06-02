import videos from "../../json/db.json"
import styles from "./Category.module.css";

export const categories = [
    "Alternative/Indie",
    "Alternative Rock",
    "Indie Rock",
    "Grunge",
    "Rock",
    "String Theory",
    "Heavy Metal",
    "Metal"
   /*  "Trash Metal",
    "Rap" */
];

export function filterCategory(id) {
    return videos.filter( video => video.category === categories[id] );
}

function Category({ category, children }) {
    return (
        <section className={styles.category}>
            <h2>{ category }</h2>
            <section className="children">
                { children }
            </section>
        </section>
    );
}

export default Category;
