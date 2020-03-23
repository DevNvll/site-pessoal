import { useState, useEffect } from "react"
import Head from "next/head"
import cx from "classnames"

import Project from "../components/Project"
import Navbar from "../components/Navbar"

export default function Index() {
  const [isDarkMode, setDarkMode] = useState(true)
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Henrick Mello</title>
        <meta name="title" content="Henrick Mello" />
        <meta
          name="description"
          content="Desenvolvedor Web FullStack. NodeJs/React."
        />
      </Head>

      <div className={cx({ "mode-dark": isDarkMode })}>
        <Navbar
          dark={isDarkMode}
          toggleDarkMode={() => {
            setDarkMode(d => !d)
          }}
        />
        <div className="w-full min-h-screen text-gray-600 bg-gray-100 dark:text-gray-200 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center w-full h-screen">
            <div className="mx-2">
              <h1 className="text-4xl font-thin text-gray-600 md:text-5xl dark:text-gray-200">
                Oi, meu nome é{" "}
                <span className="font-semibold dark:text-white">
                  Henrick Mello
                </span>
              </h1>
              <h2 className="text-xl md:text-3xl">
                e sou um{" "}
                <span className="text-gray-600 dark:text-gray-100 ">
                  FullStack Web Developer
                </span>
                .
              </h2>
              {/* <button
                onClick={() => {
                  setDarkMode(d => !d)
                }}
              >
                Toggle dark
              </button> */}
            </div>
          </div>
          <main>
            <div className="container h-auto mx-auto">
              <section className="py-2">
                <h1 className="mb-4 text-5xl font-semibold text-center">
                  Sobre Mim
                </h1>

                <p className="mx-4 my-4 text-justify">
                  Sou desenvolvedor autodidata desde os 11 anos de idade. Possuo
                  amplo conhecimento na área de desenvolvimento web,
                  principalmente no ecossistema do NodeJs (frontend e backend).
                </p>
                <p className="mx-4 my-4 text-justify">
                  Minha framework web de escolha é o ReactJS, entretanto, devido
                  à minha mentalidade "JS First", possuo grande facilidade para
                  aprender qualquer outra linguagem baseada em JavaScript.
                </p>
                <p className="mx-4 my-4 text-justify">
                  Ademais, possuo notáveis conhecimento em outras áreas
                  relacionadas a computação como edição de áudio e vídeo, design
                  gráfico, banco de dados, segurança da informação, hardware,
                  devops, etc.{" "}
                </p>
              </section>
              <hr className="mx-12 my-8 border-b border-gray-200 rounded dark:border-gray-600" />
              <section className="py-2">
                <h1 className="mb-4 text-5xl font-semibold text-center">
                  Projetos
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <Project
                    image={require("../assets/screenshots/teza.jpg")}
                    link="https://teza.com.br"
                    title="TEZA"
                    description="Aplicativo web em que trabalhei desde o início. Desenvolvi grande parte da UX e lógica de React junto com a equipe."
                  />
                  <Project
                    image={require("../assets/screenshots/siva.jpg")}
                    link="https://sivaig.now.sh"
                    title="Siva"
                    description="Aplicativo para navegar Instagram anonimamente. Desenvolvido com Next.js (React) e Tailwind.css."
                  />
                  <Project
                    image={require("../assets/screenshots/simposio.jpg")}
                    link="https://simposioredesifrj.now.sh"
                    title="Simpósio de Redes do IFRJ"
                    description="Site do 1º Simpósio de Redes da Região dos Lagos. Desenvolvido com React e Tailwind. Adaptado para portáteis e extremamente leve."
                  />
                  <Project
                    image={require("../assets/screenshots/idle.jpg")}
                    link="https://github.com/DevNvll/Steam-Idle"
                    title="Steam-Idle"
                    description="Ferramenta para 'idlear' jogos na Steam. Desenvolvido com React
              e Electron."
                  />
                  <Project
                    image={require("../assets/screenshots/gestif.jpg")}
                    link="https://github.com/DevNvll/GestIF"
                    title="GestIF"
                    description="Sistema de gestão administrativa para o IFRJ Campus Arraial do Cabo. Desenvolvido com React, Express e MongoDB."
                  />
                  <Project
                    image={require("../assets/screenshots/rplace.jpg")}
                    link="https://github.com/DevNvll/rplace-mini"
                    title="RPlace Mini"
                    description="Mini-game multiplayer em tempo real baseado no /r/place. Desenvolvido em React e Socket.io."
                  />
                  <Project
                    image={require("../assets/screenshots/vault.jpg")}
                    link="https://github.com/DevNvll/G.O.A.T"
                    title="Bot Vault 130 (G.O.A.T)"
                    description="Bot de Discord com painel web para auxiliar a seleção de tags no servidor Vault130. Desenvolvido em React e Discord.js."
                  />
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
