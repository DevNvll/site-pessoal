import Head from "next/head"

import Project from "../components/Project"
import Navbar from "../components/Navbar"

export default function Index() {
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

      <Navbar />
      <div className="w-full min-h-screen bg-gray-800">
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <div className="mx-2">
            <h1 className="text-4xl font-thin text-gray-200 md:text-5xl">
              Oi, meu nome é{" "}
              <span className="font-semibold text-white">Henrick Mello</span>
            </h1>
            <h2 className="text-xl text-gray-200 md:text-3xl">
              e sou um{" "}
              <span className="text-white">FullStack Web Developer</span>.
            </h2>
          </div>
        </div>
        <main>
          <div className="container h-auto mx-auto">
            <section>
              <h1 className="mb-4 text-5xl font-semibold text-center text-gray-100">
                Sobre Mim
              </h1>

              <p className="mx-4 my-4 text-justify text-gray-100">
                Sou desenvolvedor autodidata desde os 11 anos de idade. Possuo
                amplo conhecimento na área de desenvolvimento web,
                principalmente no ecossistema do NodeJs (frontend e backend).
                Ademais, possuo notáveis conhecimento em outras áreas
                relacionadas a computação como edição de áudio e vídeo, design
                gráfico, banco de dados, segurança da informação, hardware,
                devops, etc.{" "}
              </p>
            </section>
            <section>
              <h1 className="mb-4 text-5xl font-semibold text-center text-gray-100">
                Projetos
              </h1>
              <Project
                image={require("../assets/screenshots/siva.jpg")}
                title="Siva"
                description="Aplicativo para navegar Instagram anonimamente. Desenvolvido com Next.js (React) e Tailwind.css."
              />
              <Project
                image={require("../assets/screenshots/idle.webp")}
                title="Steam-Idle"
                description="Ferramenta para 'idlear' jogos na Steam. Desenvolvido com React
              e Electron."
              />
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
