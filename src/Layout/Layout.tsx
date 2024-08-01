import React from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Router from "../Router/router"

const Layout = ()=> {
    return(
        <React.Fragment>
            <Header />
                <Router />
            <Footer />
        </React.Fragment>
    )
}

export default Layout;