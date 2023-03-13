import * as React from "react"
import Header from "./header"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="dark:bg-slate-800 min-h-screen mx-auto">
      <Header />
      <main className="my-3 py-3 px-6 dark:bg-slate-800 dark:text-white">
        <h1 className="my-2 py-3 text-3xl font-semibold dark:text-slate-300">
          {pageTitle}
        </h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
