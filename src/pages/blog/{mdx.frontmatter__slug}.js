import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

// Blog post component
const BlogPost = ({ data, children }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            {children}
        </Layout>
    )
}

/*
Page query with query variable id.
Query variables can only be used in page queries.
*/
export const query = graphql`
query BlogQuery($id: String = "") {
    mdx(id: {eq: $id}) {
        frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
        }
    }
}
`
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
