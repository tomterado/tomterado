import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainLanding from "./mainLanding"
import About from "./about"
import Work from "./work"
import PersonalProjects from "./personalProjects"
import Art from "./art"

const IndexPage = () => (
  <Layout>
    <SEO title="tom terado" />
    <MainLanding />
    {/* <About/> */}
    <Work />
    <PersonalProjects />
    <Art />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
