import { useScrollPosition } from "../hooks/useScrollPos"
import { useState, useEffect } from "react"

export default function Navbar({ dark }) {
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
      <div className="container mx-auto ">
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
      </div>
    </nav>
  )
}
