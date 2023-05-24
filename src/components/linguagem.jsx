import styles from "./cssModules/tecnologiasSection.module.css"
import { AiFillAlipayCircle } from "react-icons/ai";
export default function Linguagem({icon}){
    if(icon == "x"){
        icon = <AiFillAlipayCircle/>
    }
    return(

        <section className={styles.linguagem}>
            {icon}
        </section>

    )

}