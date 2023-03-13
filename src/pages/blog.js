import * as React from "react"
import Layout from "../components/layout"

const BlogPage = () => {
  return (
    <Layout pageTitle={"My Blog"}>
      <p className="text-md font-semibold dark:text-slate-200">
        All posts are coming soon.
      </p>
    </Layout>
  )
}

export const Head = () => <title>My Blog</title>

export default BlogPage
