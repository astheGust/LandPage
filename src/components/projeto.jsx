import { useEffect, useState } from "react"
import styles from "./cssModules/tecnologiasSection.module.css"
export default function Projeto({title,img,text}){
    return(
        <section className={styles.projeto}>
            <div className={styles.sphere}
            style={{backgroundImage:`url(${img})`}}>
            </div>
            <div className={styles.box}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </section>
    )

}