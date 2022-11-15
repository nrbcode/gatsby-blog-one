import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

// the result of the page query is passed in as prop (called) data
const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                /* render a list of elements with .map()
                node is an element of data.allMdx.nodes */
                data.allMdx.nodes.map((node) => (
                    // .map() uses a unique key prop
                    <article key={node.id}>                        
                        <h2>
                            <Link to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

// export page query, result sorted by data
export const query = graphql`
query BlogsQuery {
    allMdx(sort: {frontmatter: {date: DESC}}) {
        nodes {
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                slug
                }
            id
            excerpt
        }
    }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
