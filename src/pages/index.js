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
        <Navbar dark={isDarkMode} />
        <div className="w-full min-h-screen text-gray-600 bg-gray-100 dark:text-gray-200 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center w-full h-screen">
            <div className="mx-2">
              <h1 className="text-4xl font-thin text-gray-600 md:text-5xl dark:text-gray-200">
                Oi, meu nome é{" "}
                <span className="font-semibold ">Henrick Mello</span>
              </h1>
              <h2 className="text-xl md:text-3xl">
                e sou um{" "}
                <span className="text-gray-600 dark:text-gray-200">
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
              <section>
                <h1 className="mb-4 text-5xl font-semibold text-center">
                  Sobre Mim
                </h1>

                <p className="mx-4 my-4 text-justify">
                  Sou desenvolvedor autodidata desde os 11 anos de idade. Possuo
                  amplo conhecimento na área de desenvolvimento web,
                  principalmente no ecossistema do NodeJs (frontend e backend).
                  <p>
                    Minha framework web de escolha é o ReactJS, porém, devido à
                    minha mentalidade "JS First", possuo grande facilidade para
                    aprender qualquer outra linguagem baseada em JavaScript.
                  </p>
                  Ademais, possuo notáveis conhecimento em outras áreas
                  relacionadas a computação como edição de áudio e vídeo, design
                  gráfico, banco de dados, segurança da informação, hardware,
                  devops, etc.{" "}
                </p>
              </section>
              <section className="py-4">
                <h1 className="mb-4 text-5xl font-semibold text-center">
                  Projetos
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <Project
                    image={require("../assets/screenshots/siva.jpg")}
                    title="Siva"
                    description="Aplicativo para navegar Instagram anonimamente. Desenvolvido com Next.js (React) e Tailwind.css."
                  />
                  <Project
                    image={require("../assets/screenshots/simposio.jpg")}
                    title="Simpósio de Redes do IFRJ"
                    description="Site do 1º Simpósio de Redes da Região dos Lagos. Desenvolvido com React e Tailwind. Adaptado para portáteis e extremamente leve."
                  />
                  <Project
                    image={require("../assets/screenshots/idle.jpg")}
                    title="Steam-Idle"
                    description="Ferramenta para 'idlear' jogos na Steam. Desenvolvido com React
              e Electron."
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
