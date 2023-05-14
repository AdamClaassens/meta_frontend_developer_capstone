import React from "react";
import Header from "./Header";
import {Box, Button, Typography} from "@mui/material";
import restauranfood from "../assets/restauranfood.jpg"
import marioAdrianA from "../assets/Mario and Adrian A.jpg"
import marioAdrianB from "../assets/Mario and Adrian b.jpg"

const About = () => {

    return (
        <article>
            <Box
                display="grid"
                gridTemplateColumns={{xs: "repeat(1, 1fr)", md: "repeat(12, 1fr)"}} // Update this line
                gridAutoRows="385px"
                alignItems="top"
                sx={{
                    paddingTop: "20px",
                    paddingLeft: {xs: "0px", md: "300px"},
                    paddingRight: {xs: "0px", md: "300px"},
                    backgroundColor: "#EE9972"
                }}
            >
                <Box
                    gridColumn="span 5"
                >
                    <Header title="Little Lemon" subtitle="Chicago"></Header>
                    <Typography variant="p" color={"#EDEFEE"}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Typography>
                </Box>

                <Box gridColumn="span 3"></Box>

                <Box
                    gridColumn="span 2"
                    mb="30px"
                >
                    {/* Bottom Image*/}
                    <img
                        src={marioAdrianA}
                        width="440px"
                    />
                    {/* Top Image*/}
                    <img
                        src={marioAdrianB}
                        width="440px"
                        style={{
                            position: "relative",
                            transform: "translate(-50%, -75%)"
                        }}
                    />
                </Box>
            </Box>
        </article>
    )
}

export default About