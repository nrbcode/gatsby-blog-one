// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

/*
Step 2:
Define a component (returns a React element).
Pages created in the src/pages directory use the name of the file as the route for the page.
*/
const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>A practice blogging website, built with Gatsby on React.</p>
            <StaticImage
              alt="The coronation of Zues at Mount Olympus"
              src="../images/ancient-greece.jpg"
            />
        </Layout>
    )
}

// head metadata - title prop passed to Seo comonent
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage
