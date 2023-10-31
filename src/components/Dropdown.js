import React, { useState } from 'react'
import '../styles/landing.scss'
import { motion } from 'framer-motion'

function Dropdown(props) {
  return (
    // <motion.div initial="initial" animate='animate'>
    <>
        {props.state ? <motion.ul variants={props.header} className='dropdown'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Our Services</li>
        </motion.ul>:
        null}</>
    // </motion.div>
  )
}

export default Dropdown