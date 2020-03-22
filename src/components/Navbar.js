import { useScrollPosition } from "../hooks/useScrollPos"
import { useState, useEffect } from "react"

export default function Navbar({ dark, toggleDarkMode }) {
  const [scrolled, setScroll] = useState(false)

  useEffect(() => {
    setScroll(Boolean(window?.pageYOffset > 100))
  }, [])

  useScrollPosition(({ prevPos, currPos }) => {
    setScroll(currPos.y < -100)
  }, [])

  return (
    <nav
      className="fixed top-0 z-10 flex items-center justify-center w-full h-16 text-gray-600 transition duration-200 ease-in-out dark:text-gray-200"
      style={{
        backdropFilter: "blur(9px)",
        backgroundColor: scrolled
          ? !dark
            ? "rgba(255,255,255,0.5)"
            : "rgba(5, 5, 5, 0.5)"
          : "transparent"
      }}
    >
      <div className="container flex justify-between mx-auto">
        <div className="flex justify-center w-full ">
          <a
            href="https://www.github.com/DevNvll/"
            target="_blank"
            rel="noopener"
            className="mr-4 no-underline transition duration-200 border-b border-transparent cursor-pointer hover:border-gray-200 dark-hover:border-gray-200 text-semibold transition-ease-in-out"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hmello/"
            target="_blank"
            rel="noopener"
            className="mr-4 no-underline transition duration-200 border-b border-transparent cursor-pointer hover:border-gray-200 text-semibold transition-ease-in-out"
          >
            LinkedIn
          </a>
        </div>
        <div className="w-5 px-4 cursor-pointer" onClick={toggleDarkMode}>
          {dark ? (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5"
              alt="Toggle dark mode"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5"
              alt="Toggle dark mode"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </div>
      </div>
    </nav>
  )
}
