import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Sobre</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("hero/HeroImage1.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Desenvolvedor front-end com três anos de experiência, especializado em ReactJs e Angular.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>Desenvolvedor front-end com três anos de experiência, especializado em ReactJs e Angular.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="Cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Mobile Developer</h3>
                            <p>Desenvolvedor front-end com três anos de experiência, especializado em ReactJs e Angular.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}