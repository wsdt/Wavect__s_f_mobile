import * as React from "react"
import { createAppContainer } from "react-navigation"
import { watchConfiguration } from "./src/globalConfiguration/developerProtection"
import Router from "./src/mvc/views/components/system/TabRouter/TabRouter"

// Start developer protection
watchConfiguration()

/**
 * Just export the router component in an app container, to
 * make routes available to all pages.
 */
export default createAppContainer(Router)
