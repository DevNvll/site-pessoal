import React from "react"
import App from "next/app"
import "../css/tailwind.css"
import Head from "next/head"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
