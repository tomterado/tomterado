import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import Radium from 'radium';
import Col from 'react-bootstrap/Col';


class Work extends React.Component {

    state = {
      blocumenta: require('../images/blocumenta_bw.jpg'),
      bondfire:require('../images/bondfire_bw.jpg'),
      bitfwd: require('../images/bitfwd_bw.jpg'),
      anjuna: require('../images/anjuna_bw.jpg'),

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
          workItem:{
            margin: 20,
            boxShadow: '3px 3px 3px 3px #888888',
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
        column2: {
          float: 'left',
          // flexBasis: 32%,
          flexGrow: 1,
          width: '48%',
          margin: 5,
        },
        overlay: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          height: '100%',
          width: '100%',
          opacity: 0,
          transition: '.5s ease',
          backgroundColor: '#008CBA',
        }

        }

        return (


            <div>
                <h3 style={styles.secondaryTitle}> work</h3>

                <div>
                    <div style={styles.container}>
                        <Col sm={12}>
                        <div style={{display: 'flex', marginBottom: 20}}>
                            <div style={styles.workItem}>
                              {/* <img alt= '' style={{marginBottom: 0, borderRadius: 10}}src={require('../images/blocumenta.png')} /> */}
                              <img
                                src={this.state.blocumenta}
                                target=""
                                style={{marginBottom: 0,borderTopLeftRadius:8,borderTopRightRadius:8, }}
                                onMouseEnter={() => {
                                  this.setState({
                                    blocumenta: require("../images/blocumenta.png"),
                                  })
                                }}
                                onMouseOut={() => {
                                  this.setState({
                                    blocumenta: require("../images/blocumenta_bw.jpg"),
                                  })
                                }}
                                onClick={() => window.open("https://www.blocumenta.org/blockathonsyd2019")}
                              >

                              </img>
                              <div style={{margin: 20}}>
                                <h4> Blocumenta Blockathon</h4>
                                <p> Wireframed, designed and implementated of landing page for a Blockchain Hackathon page.</p>
                                  <ul style={{display:'flex', marginLeft: 0}}>
                                    <li style={styles.borderlist}>  HTML</li>
                                    <li style={styles.borderlist}> CSS </li>
                                  </ul>
                              </div>
                            </div>
                        </div>
                        </Col>

                    <div style={styles.container}>
                        <Col sm={12}>
                          <div style={{ display: "flex", marginBottom: 20 }}>

                            <div style={styles.workItem}>
                              {/* <img alt= '' style={{marginBottom: 0, borderRadius: 10}}src={require('../images/bondfire.jpg')} /> */}
                              {/*<img alt= '' style={{marginBottom: 0, borderRadius: 10}}src={require('../images/bondfire_bw.jpg')} />*/}
                              <img
                                src={this.state.bondfire}
                                style={{ marginBottom: 0, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                                onMouseEnter={() => {
                                  this.setState({
                                    bondfire: require("../images/bondfire.jpg"),
                                  })
                                }}
                                onMouseOut={() => {
                                  this.setState({
                                    bondfire: require("../images/bondfire_bw.jpg"),
                                  })
                                }}
                                onClick={() => window.open("http://www.bondfireapp.com/")}
                              />


                              <div style={{ margin: 20 }}>
                                <h4> Bondfire </h4>
                                <p> Wireframed and contributed to front-end development. Launched in June 2019.</p>
                                <ul style={{ display: "flex", marginLeft: 0 }}>
                                  <li style={styles.borderlist}> CSS</li>
                                  <li style={styles.borderlist}> Javascript</li>
                                  <li style={styles.borderlist}> React Native</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Col>

                        </div>



                    </div>

                    <div style={styles.container}>

                      <div style={{display: 'flex', marginBottom: 20}}>
                            <div style={styles.workItem}>
                              {/* <img alt= '' style={{marginBottom: 0, borderRadius: 10}}src={require('../images/bitfwd.png')} /> */}
                              {/*<img alt= '' style={{marginBottom: 0, borderRadius: 10}}src={require('../images/bitfwd_bw.jpg')} />*/}
                              <img
                                src={this.state.bitfwd}
                                style={{marginBottom: 0,borderTopLeftRadius:8,borderTopRightRadius:8, }}
                                onMouseEnter={() => {
                                  this.setState({
                                    bitfwd: require('../images/bitfwd.png'),
                                  })
                                }}
                                onMouseOut={() => {
                                  this.setState({
                                    bitfwd: require("../images/bitfwd_bw.jpg"),
                                  })
                                }}
                                onClick={() => window.open("http://bitfwd.com")}

                              />


                              <div style={{margin: 20}}>
                                <h4> bitfwd</h4>
                                <p> Designed and built website over Wordpress</p>
                                <ul style={{display:'flex', marginLeft: 0}}>
                                  <li style={styles.borderlist}>  HTML</li>
                                  <li style={styles.borderlist}> CSS </li>
                                </ul>
                              </div>
                              </div>
                      </div>

                      <div style={{display: 'flex', marginBottom: 20}}>
                            <div style={styles.workItem}>
                              {/* <img alt= '' style={{marginBottom: 0, borderRadius: 10}}src={require('../images/anjuna.jpg')} /> */}
                              {/*<img alt= '' style={{marginBottom: 0, borderRadius: 10}}src={require('../images/anjuna_bw.jpg')} />*/}
                              <img
                                src={this.state.anjuna}
                                style={{marginBottom: 0,borderTopLeftRadius:8,borderTopRightRadius:8, }}
                                onMouseEnter={() => {
                                  this.setState({
                                    anjuna: require('../images/anjuna.jpg'),
                                  })
                                }}
                                onMouseOut={() => {
                                  this.setState({
                                    anjuna: require("../images/anjuna_bw.jpg"),
                                  })
                                }}
                                onClick={() => window.open("https://www.anjuna.io/")}
                              />
                              <div style={{margin: 20}}>
                                <h4> Anjuna Security</h4>
                                <p> Designed and built website over SquareSpace.</p>
                                <ul style={{display:'flex', marginLeft: 0}}>
                                  <li style={styles.borderlist}>  HTML</li>
                                  <li style={styles.borderlist}> CSS </li>
                                </ul>
                              </div>
                              </div>
                      </div>
                    </div>
                </div>


            </div>


        );
    }
};
export default Work;