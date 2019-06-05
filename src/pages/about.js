import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

class About extends React.Component {
    render() {

        const styles = {
          container: {
            display: 'flex',
            // paddingTop: '10%',
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

        }

        return (

            <div style={styles.container}>
                <div style={{flexDirection: 'column', flex: 2}}>
                <h3 style={styles.secondaryTitle}> about </h3>
                <h3 style={styles.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h3>
                </div>
                <div style={{flexDirection: 'column', flex: 1}}>
                    <img style={{marginTop: '50%'}} src="https://singularityhub.com/wp-content/uploads/2019/04/3D-black-box-artificial-intelligence-interviews-shutterstock-489987685-1068x601.jpg"/> 
                </div>
            </div>

        );
    }
};
export default About;