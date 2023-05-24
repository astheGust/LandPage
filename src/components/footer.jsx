import {FaGithub,FaLinkedin} from 'react-icons/fa'
import styles from "./cssModules/footer.module.css"
export default function Footer(){

    return(
        <footer>         
            <section>
            <h2>Contatos</h2>
                <ul>
                    <li>anygustavocosta@gmail.com</li>
                    <li>Numero:11 99470-9769</li>
                    <li></li>
                </ul>
            </section>
                <ul id={styles.icons}>
                    <li><a href="https://github.com/astheGust">
                        <FaGithub id={styles.gitHub}/>
                    </a></li>
                    <li><a href="#">
                        <FaLinkedin id={styles.linkedin}/>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/gustavo-costa-563145208/">
                        
                    </a></li>
                </ul>
            
        </footer>
    )

}