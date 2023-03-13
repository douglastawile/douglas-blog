// Step 1: Import React
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle={"About Us"}>
      <div className="my-2 py-8 px-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <StaticImage
          className="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
          src="../images/code.jpg"
          alt="Douglas"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Douglas Maalon also known as Code Whisperer
            </p>
            <p className="text-slate-500 font-medium">
              A Teacher, software developer specialized in JavaScript, React,
              Redux, Node JS, HTML and CSS.
            </p>
          </div>
          <Link className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Follow me on twitter
          </Link>
        </div>
      </div>

      <div className="my-2 py-8 px-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <StaticImage
          className="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
          src="../images/ts.jpg"
          alt="TS"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Fiifi Biney also known as T-Shirt
            </p>
            <p className="text-slate-500 font-medium">
              A Teacher, graphic designer, UI/UX designer and digital media
              manager
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Follow me on twitter
          </button>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>About Us</title>

// Step 3: Export your component
export default AboutPage
