import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return(
        <section className={styles.container}> 
            <div className={styles.content}>
                <h1 className={styles.title}>Olá eu sou Marlei</h1>
                <p className={styles.description}>Desenvolvedor full-stack com três anos de experiência,
                     especializado nas tecnologias mais populares do mercado,
                      tais como Java, Quarkus, ReactJs, Angular e React-Native.
                </p>
                <a href="mailto:marleimelchior@gmail.com" className={styles.contactBtn}>
                    Contate me
                </a>
            </div>
            <img 
                src={getImageUrl("hero/HeroImage1.png")}
                alt="Hero image of me"
                className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}