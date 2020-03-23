import { useState, useEffect } from "react"
import Head from "next/head"
import cx from "classnames"
import useTranslation from "../hooks/useTranslation"

import Project from "../components/Project"
import Navbar from "../components/Navbar"

export default function Index() {
  const [isDarkMode, setDarkMode] = useState(true)
  const { t, setLang } = useTranslation("pt")

  useEffect(() => {
    if (window.localStorage.getItem("dark")) {
      setDarkMode(window.localStorage.getItem("dark") === "true")
      return
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  function setDark(value) {
    window.localStorage.setItem("dark", JSON.stringify(value))
    setDarkMode(value)
  }

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
            setDark(!isDarkMode)
          }}
        />
        <div className="w-full min-h-screen text-gray-600 bg-gray-100 dark:text-gray-200 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center w-full h-screen">
            <div className="mx-2">
              <h1 className="text-4xl font-thin text-gray-600 md:text-5xl dark:text-gray-200">
                {t("myNameIs")}{" "}
                <span className="font-medium dark:text-white">
                  Henrick Mello
                </span>
              </h1>
              <h2 className="text-xl md:text-3xl">
                {t("iAm")}{" "}
                <span className="font-semibold dark:text-gray-100">
                  FullStack Web Developer
                </span>
                .
              </h2>
            </div>
          </div>
          <main>
            <div className="container h-auto mx-auto">
              <section className="py-2">
                <h1 className="mb-4 text-5xl font-semibold text-center">
                  {t("aboutMe")}
                </h1>

                <p className="mx-4 my-4 text-justify">{t("firstP")}</p>
                <p className="mx-4 my-4 text-justify">{t("secondP")}</p>
                <p className="mx-4 my-4 text-justify">{t("thirdP")}</p>
              </section>
              <hr className="mx-12 my-8 border-b border-gray-200 rounded dark:border-gray-600" />
              <section className="py-2">
                <h1 className="mb-4 text-5xl font-semibold text-center">
                  {t("projects")}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <Project
                    image={require("../assets/screenshots/teza.jpg")}
                    link="https://teza.com.br"
                    title="TEZA"
                    description={t("teza")}
                  />
                  <Project
                    image={require("../assets/screenshots/siva.jpg")}
                    link="https://sivaig.now.sh"
                    title="Siva"
                    description={t("siva")}
                  />
                  <Project
                    image={require("../assets/screenshots/simposio.jpg")}
                    link="https://simposioredesifrj.now.sh"
                    title="Simpósio de Redes do IFRJ"
                    description={t("simposio")}
                  />
                  <Project
                    image={require("../assets/screenshots/idle.jpg")}
                    link="https://github.com/DevNvll/Steam-Idle"
                    title="Steam-Idle"
                    description={t("steamidle")}
                  />
                  <Project
                    image={require("../assets/screenshots/gestif.jpg")}
                    link="https://github.com/DevNvll/GestIF"
                    title="GestIF"
                    description={t("gestif")}
                  />
                  <Project
                    image={require("../assets/screenshots/rplace.jpg")}
                    link="https://github.com/DevNvll/rplace-mini"
                    title="RPlace Mini"
                    description={t("rplace")}
                  />
                  <Project
                    image={require("../assets/screenshots/vault.jpg")}
                    link="https://github.com/DevNvll/G.O.A.T"
                    title="Bot Vault 130 (G.O.A.T)"
                    description={t("vault")}
                  />
                </div>
              </section>
            </div>
          </main>
          <footer className="flex justify-center w-full p-4 py-16 text-gray-400">
            © 2020{" "}
            <a href="http://hmello.now.sh/" className="ml-1 text-gray-500">
              Henrick Mello
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}
