import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

class MainLanding extends React.Component {
  render() {
    const styles = {
      container: {
        display: "flex",
        marginBottom: "3rem",
      },
      container2: {
        flex: 1,
      },
      title: {
        fontSize: "5em",
        marginBottom: "3rem",
        textAlign: "center",
      },
      secondaryTitle: {
        fontSize: "3rem",
        lineHeight: 1.5,
      },
      description: {
        fontSize: "2.5rem",
        lineHeight: 1.5,
        textAlign: "center",
        marginBottom: "3rem",
      },
      shorterLine: {
        width: "350px",
        height: "7px",
        backgroundColor: "#000",
      },
      shorterLine2: {
        width: "350px",
        height: "7px",
        backgroundColor: "#000",
      },
      textStroke: {
        color: "white",
        webkitTextStrokeColor: "black",
        "-webkit-text-stroke-color": "black",
        "-webkit-text-stroke-width": "2px",
      },
      smallerTextStroke: {
        color: "white",
        textStroke: "1px black",
        "-webkit-text-stroke-color": "black",
        "-webkit-text-stroke-width": "1px",
      },
    }

    return (
      <div style={styles.container}>
        <div style={{ alignItems: "center" }}>
          <h1 style={styles.title}> tom terado </h1>

          <h3 style={styles.description}>
            {" "}
            passionate about{" "}
            <span style={styles.smallerTextStroke}> product design</span> and
            the relationship between{" "}
            <span style={styles.smallerTextStroke}> tech </span> and{" "}
            <span style={styles.smallerTextStroke}> art.</span>{" "}
          </h3>
          <div style={{ display: "flex", justifyContent: "center" }} />
        </div>
      </div>
    )
  }
}
export default MainLanding
