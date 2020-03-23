import locales from "./locales.json"
import { useState, useEffect } from "react"

const isBrowser = typeof window !== `undefined`

function getUserLang() {
  let userLang = isBrowser ? navigator.language || navigator.userLanguage : "en"
  return userLang
}

function getCatalog(lang) {
  const strings =
    locales[lang] ||
    locales[getUserLang()] ||
    locales[getUserLang().split("-")[0]] ||
    locales["en"]
  return strings
}

export default function useTranslation(defaultLang = "en") {
  const [lang, setLang] = useState(defaultLang)
  const t = key => getCatalog(lang)[key]

  useEffect(() => {
    setLang(getUserLang())
  }, [])

  return {
    lang,
    setLang,
    t
  }
}
