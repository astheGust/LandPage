import { useEffect,useState,useRef } from "react"
import styles from "./cssModules/navbar.module.css"
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {Link} from "react-scroll"
export default function Navbar(){
    const [visible,setVisible] = useState(true)

    const list = useRef()
    const listItems = useRef()
    useEffect(() =>{
    const scrollMouse = () =>{
        let verticalScroll = window.scrollY
        let viewHeight = window.innerHeight

        if(verticalScroll >= viewHeight){
            setVisible(false)
        }else{setVisible(true)}}

        window.addEventListener("scroll",scrollMouse)

        return () =>{window.removeEventListener("scroll",scrollMouse)}
    },[])

    useEffect(()=>{
        const ulColumnOrFlex = () =>{
            let scrollY = window.scrollY
            let viewH = window.innerHeight

            if(scrollY >= viewH){
                list.current.style.flexDirection = "column"
                list.current.style.marginTop = "40px"
            }else{
                list.current.style.flexDirection = "row"
                list.current.style.marginTop = "0"
            }
        }

        window.addEventListener("scroll",ulColumnOrFlex)
    },
    [])

    return(
        <nav>
            <ul ref={list}>
                <li><Link to="tela1" smooth={true} duration={200}>Home</Link></li>
                <li><Link to="tela2" smooth={true} duration={200}>Tecnologias</Link></li>
            </ul>
            { visible ? (<h1>PortFólio</h1>):<h1>Tecnologias</h1>}
            {visible ? (<div>
                <a href="https://github.com/astheGust"><FaGithub id={styles.gitHub} className={styles.logos}/></a>
                <a href="https://www.linkedin.com/in/gustavo-costa-563145208/"><FaLinkedin id={styles.linkedin} className={styles.logos}/></a>
            </div>):<div></div>}
        </nav>
    )
}