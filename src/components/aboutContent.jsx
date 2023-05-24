import styles from "./cssModules/about.module.css"
export default function About(){
    return(
        <article id={styles.containerAbout}>
            <section>
                <h2>Quem sou eu?</h2>
                <p>
                        Olá, Eu sou o Gustavo, sou um amante da tecnologia desde muito novo, sempre fui muito interessado no assunto,
                    sempre desmontando aparelhos quebrados ou com mal funcionamento,
                    e assim fui pegando paixão nesses aparelhos, eu estudo programação
                    e procuro trabalho na área de tecnologia, seja em qualquer tipo de setor,
                    tenho conhecimento no pacote Office e com computadores de forma geral,
                    e claro se não consigo resolver o devido problema eu pesquiso,
                    peço ajuda e busco aprender sobre o erro encontrado, sobre tudo minha grande paixão
                    é aprender, dito isso tenho 18 anos e busco uma oportunidade.
                </p>
                <div>Obrigado Pela Atenção</div>
            </section>
        </article>
    )
}