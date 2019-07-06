import * as React from "react"
import { createAppContainer } from "react-navigation"
import Router from "./src/mvc/views/components/system/Router/Router"

/**
 * Just export the router component in an app container, to
 * make routes available to all pages.
 */

// TODO: SafeAreaView to maybe automatically display objects right
// TODO: (e.g. better positioned when router header, kamera etc.)
export default createAppContainer(Router)
