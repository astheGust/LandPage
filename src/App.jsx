import { Element } from 'react-scroll';
import styles from "./components/cssModules/app.module.css"
import Navbar from "./components/navbar"
import About from "./components/aboutContent"
import Tecnologias from "./components/tecnologiasSection";
import Footer from "./components/footer";

function App() {

  return(
    <>
  <Element name="tela1">
    <main id={styles.tela1}>
      <Navbar />
      <About />
    </main>
  </Element>
  <Element name="tela2">
  <section id={styles.quebraTela}>
  </section>
    <main id={styles.tela2}>
    <Tecnologias />
    </main>
  </Element>
  <Footer />
  </>
  )

}

export default App
