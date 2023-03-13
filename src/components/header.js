import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  const links = [
    {
      id: "1",
      label: "Home",
      link: "/",
    },
    {
      id: "2",
      label: "Blog",
      link: "/blog",
    },
    {
      id: "3",
      label: "About",
      link: "/about",
    },
  ]

  return (
    <nav className="bg-white p-6 dark:bg-slate-800 dark:text-white">
      <ul className="flex justify-center items-center my-2">
        {links.map(({ link, label, id }) => {
          return (
            <li className="px-2 mx-2" key={id}>
              <Link
                to={link}
                className="bg-slate-400 py-2 px-4 rounded-md shadow-lg"
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Header
