import styles from "./cssModules/tecnologiasSection.module.css"
import Projeto from "./projeto"
import { FaReact } from "react-icons/fa";
import {TbBrandJavascript,TbBrandHtml5,TbBrandCss3} from "react-icons/tb"
import {SiMicrosoftexcel,SiMicrosoftword,SiMicrosoftpowerpoint} from "react-icons/si"
export default function Tecnologias(){
    return(
        <article id={styles.conhecimentos}>
            <section className={styles.sectionProjetos}>

                <Projeto urlSite='http://relogiohtmlcssjs.epizy.com'
                title="Relógio" urlImg="https://i.pinimg.com/474x/cf/9d/8f/cf9d8fa92e49cc73f6f9e2fbdb5083cc.jpg"
                text="Relógio simples feito com html scss e lógica em javascript"/>

                <Projeto urlSite='http://pokemonbattle.great-site.net'
                title="Batalha Pokemon" urlImg="https://i.pinimg.com/736x/cd/57/fe/cd57fe942cfdfa87ae36e29a32472b51.jpg"
                text="um dos meus primeiros projetos, uma batalha pokemon em html css e javascript"/>

                <Projeto urlSite='http://calculadorajs.great-site.net'
                title="Calculadora" urlImg="https://i.pinimg.com/474x/5a/8a/32/5a8a32b63f2827dc4acfc8904bcc7ae3.jpg"
                text="Calculadora com html scss e javascript"/>

            </section>
            <section style={{display:"block"}} className={styles.sectionProjetos}>
                <div className={styles.divLinguagens}>
                    <FaReact id={styles.react}/>
                    <TbBrandJavascript id={styles.js}/>
                    <TbBrandCss3 id={styles.css}/>
                    <TbBrandHtml5 id={styles.html}/>
                </div>
                <div className={styles.divLinguagens}>
                    <SiMicrosoftword id={styles.word}/>
                    <SiMicrosoftexcel id={styles.excel}/>
                    <SiMicrosoftpowerpoint id={styles.powerPoint}/>                  
                </div>             
            </section>
            
        </article>
    )

}