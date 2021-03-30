import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img8.jpg";
import Common from "./Common";
const About=()=>{
    return(
        <>
        <Common
        name='Welcome to About page' 
        imgsrc={web} 
        visit="/contact" 
        btname="Contact Now"/>
        </>
    )
}
export default About;