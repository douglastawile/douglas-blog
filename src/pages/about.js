// Step 1: Import React
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle={"About Us"}>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <StaticImage
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="../images/code.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Douglas Maalon also known as Code Whisperer
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              For more info, email me: douglastawile@gmail.com
            </a>
            <p className="mt-2 text-slate-500">
              A Teacher, software developer specialized in JavaScript, React,
              Redux, Node JS, HTML and CSS.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <StaticImage
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="../images/ts.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Fiifi Biney also known as T-Shirt
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              For more info, email me: douglastawile@gmail.com
            </a>
            <p className="mt-2 text-slate-500">
              A Teacher, graphic designer, UI/UX designer and digital media
              manager
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>About Us</title>

// Step 3: Export your component
export default AboutPage
