import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const styles = {
  container: {
    display: 'flex',
    marginBottom: '3rem',
  },
  container2: {
    flex: 1,
  },
  title: {
    fontSize: '5em',
    marginBottom: '3rem',
  },
  secondaryTitle: {
    fontSize: '3em',
    lineHeight: 1.5,
  },
  description: {
    fontSize: '2em',
    lineHeight: 1.5,
    textAlign: 'left',
  },
  shorterLine: {
    width: '350px',
    height: '7px',
    backgroundColor: '#000',
  },
  shorterLine2: {
    width: '350px',
    height: '7px',
    backgroundColor: '#000',
  },
  textStroke: {
    color: 'white',
    webkitTextStroke: '2px black', 
    textStroke: '2px black',
    textDecoration: 'none',
  },
  textStroke2: {
    color: 'white',
    webkitTextStroke: '1px black',
    textStroke: '1px black',
    textDecoration: 'none',
  },


  textStrokehover: {

  }
}

const contactPage = () => (

  
  
  <Layout>
    <SEO title="Contact" />
    <h1 style={styles.title}> 
      check out my: <br/> 
      <a href="https://www.linkedin.com/in/tterado/" style={styles.textStroke}> linkedin</a>  <br/>
      <a href="https://dribbble.com/crypghost" style={styles.textStroke}> dribble</a>  <br/>
      <a href="https://github.com/tomterado" style={styles.textStroke}> github </a>  <br/>
      <a href="https://twitter.com/tomterado" style={styles.textStroke}> twitter</a>  <br/>
     </h1> 
    <h1 style={styles.description}> My email: <a href="mailto:tom.terado@gmail.com?Subject=Hello%Tom!" style={styles.textStroke2}> tom.terado@gmail.com</a>
    </h1>
  </Layout>
)

export default contactPage
