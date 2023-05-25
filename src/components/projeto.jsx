import styles from "./cssModules/tecnologiasSection.module.css"
export default function Projeto({title,urlImg,text,urlSite}){
    return(
        <section className={styles.projeto}>
            <div className={styles.sphere}
            style={{backgroundImage:`url(${urlImg})`}}>
            </div>
            <div className={styles.box}>
                <h3><a href={`${urlSite}`}>{title}</a></h3>
                <p>{text}</p>
            </div>
        </section>
    )
}