import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contato</h2>
                <p>Sinta-se à vontade para entrar em contato!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                    <a href="mailton:marleimelchior@gmail.com">marleimelchior@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
                    <a href="https://www.linkedin.com/in/marleimelchior/">linkedin.com/in/marleimelchior/</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                    <a href="https://github.com/marleimelchior">github.com/marleimelchior</a>
                </li>
            </ul>
        </footer>
    )
}