import * as React from "react"
import Layout from "../components/layout"

const BlogPage = () => {
  return (
    <Layout pageTitle={"My Blog"}>
      <p>All posts are coming soon.</p>
    </Layout>
  )
}

export const Head = () => <title>My Blog</title>

export default BlogPage
