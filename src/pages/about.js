// Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

/*
Define a component (returns a React element).
Pages created in the src/pages directory use the name of the file as the route for the page.
*/
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I built this site with Gatsby.</p>
        </Layout>
    )
}

/*
The Gatsby Head API allows the addition of metadata to the document.
Any valid html <head> tags may be used.
Adding such metadata helps search engines index the site (for example SEO).
Works inside src/pages/.
*/
export const Head = () => <Seo title="About Me" />

// Export the component
export default AboutPage