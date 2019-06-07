import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

class PersonalProjects extends React.Component {

    state = {
      koala: require('../images/koala_bw.jpg'),
      kirby: require('../images/kirby_bw.jpg'),

    }
  

    render() {

        const styles = {
          container: {
            display: 'flex',
            justifyContent: 'space-between',
          },
          container2: {
            flex: 1,
          },
          title: {
            fontSize: '3em',
          },
          secondaryTitle: {
            fontSize: '3em',
            lineHeight: 1.5,
          },
          description: {
            fontSize: '1.5em',
            lineHeight: 1.5,
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
            marginLeft: '63%',
          },
          projectItem:{
            margin: 20,
            boxShadow: '5px 5px 5px 5px #888888',
            borderRadius: 10,

          },
          borderlist: {
            listStylePosition:'inside',
            listStyleType: 'none',
            border: '1px solid black',
            borderRadius: 10,
            display:'inline-block',
            padding: 5,
            marginRight: 10,
            float:'center',
        },
        }


        return (

            <div>
                <hr style={styles.shorterLine}/>
                <h3 style={styles.secondaryTitle}> personal projects</h3>

                <div>
                    <div style={styles.container}>
                        <div style={{display: 'flex', marginBottom: 20}}>
                            <div style={styles.projectItem}>
                              <img
                                src={this.state.koala}
                                onMouseEnter={() => {
                                  this.setState({
                                    koala: require('../images/koala.jpg'),
                                  })
                                }}
                                onMouseOut={() => {
                                  this.setState({
                                    koala: require("../images/koala_bw.jpg"),
                                  })
                                }}
                              />

                              <div style={{margin: 20}}>
                                <h4> Koala (Accenture Hackathon)</h4>
                                <p> Developed wireframes, design and implemented front-end connecting to Ethereum network</p>

                                <ul style={{display:'flex', marginLeft: 0}}>
                                    <li style={styles.borderlist}>  HTML</li>
                                    <li style={styles.borderlist}> CSS </li>
                                    <li style={styles.borderlist}> Javascript </li>
                                    <li style={styles.borderlist}> React </li>
                                  </ul>
                              </div>
                            </div>
                        </div>
                    <div style={styles.container}>
                        <div style={{display: 'flex', marginBottom: 20, borderRadius: 10}}>
                            <div style={styles.projectItem}>
                              {/*<img alt= '' style={{marginBottom: 0,borderRadius: 10}} src={require('../images/bondfire.jpg')} />*/}
                              <img
                                src={this.state.kirby}
                                onMouseEnter={() => {
                                  this.setState({
                                    kirby: require('../images/kirby.jpg'),
                                  })
                                }}
                                onMouseOut={() => {
                                  this.setState({
                                    kirby: require("../images/kirby_bw.jpg"),
                                  })
                                }}
                              />


                              <div style={{margin: 20}}>
                                <h4> Bondfire </h4>
                                <p> Worked on wireframes, branding, prototyping and front-end development. Launched in June 2019.</p>
                                <ul style={{display:'flex', marginLeft: 0}}>
                                    <li style={styles.borderlist}>  HTML</li>
                                    <li style={styles.borderlist}> CSS </li>
                                    <li style={styles.borderlist}> Javascript </li>
                                    <li style={styles.borderlist}> React </li>
                                  </ul>
                              </div>
                            </div>
                        </div>

                        </div>
                    </div>

                </div>


            </div>


        );
    }
};
export default PersonalProjects;