// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>
        Thank you for joining me here. The reason for creating blog site is to
        tell you that there will be a website coming soon that is mainly build
        for teachers.
      </p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
