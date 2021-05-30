import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { isLoggedIn } from "../services/auth"
import { navigate } from "gatsby"

const isBrowser = typeof window !== "undefined"

const PrivateComp = ({ component: Component, location, ...rest }) => {

  useEffect(() => {
    if (!isLoggedIn()) {
      // If we’re not logged in, redirect to the home page.
      navigate(`/login`)
      return null
    }
  })

  return <Component {...rest} />
}

PrivateComp.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateComp;
